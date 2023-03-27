USE DATABASE tc2005b;

-- Query 1: La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.

SELECT SUM(cantidad) AS cantidadTotal, SUM(precio*cantidadTotal) AS importe
FROM entregan e, materiales m
WHERE e.clave = m.clave
AND fecha BETWEEN '1997-01-01' AND '1997-12-31';

-- Query 2: Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.

SELECT p.razonsocial, COUNT(e.rfc) as numEntregas, SUM(m.precio*e.cantidad) as importeTotal
FROM entregan e, materiales m, proveedores p
WHERE e.clave = m.clave
AND e.rfc = p.rfc
GROUP BY p.razonsocial;

-- Query 3: Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.

SELECT m.clave, m.descripcion, SUM(e.cantidad) as cantidadTotal, MIN(e.cantidad) as cantidadMinima, MAX(e.cantidad) as cantidadMaxima, SUM(m.precio*e.cantidad) as importeTotal
FROM entregan e, materiales m
WHERE e.clave = m.clave
GROUP BY m.clave, m.descripcion
HAVING AVG(e.cantidad) > 400;

-- Query 4: Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.

SELECT p.razonsocial, m.clave, m.descripcion, AVG(e.cantidad) as cantidadPromedio
FROM entregan e, materiales m, proveedores p
WHERE e.clave = m.clave
AND e.rfc = p.rfc
GROUP BY p.razonsocial, m.clave, m.descripcion
HAVING AVG(e.cantidad) > 500;

-- Query 5: Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.

SELECT p.razonsocial, m.clave, m.descripcion, AVG(e.cantidad) as cantidadPromedio
FROM entregan e, materiales m, proveedores p
WHERE e.clave = m.clave
AND e.rfc = p.rfc
GROUP BY p.razonsocial, m.clave, m.descripcion
HAVING AVG(e.cantidad) < 370 OR AVG(e.cantidad) > 450;

-- Insertar datos en la tabla de materiales
INSERT INTO materiales VALUES 
(2010, 'Tornillo', 1, 0.1, 10.0),
(2020, 'Clavo', 1, 0.1, 10.0),
(2030, 'Tuerca', 1, 0.1, 10.0),
(2040, 'Cinta', 1, 0.1, 10.0),
(2050, 'Cable', 1, 0.1, 10.0);

-- Query 6: Clave y descripción de los materiales que nunca han sido entregados.

SELECT m.clave, m.descripcion
FROM materiales m
WHERE m.clave NOT IN (SELECT e.clave FROM entregan e);

-- Query 7: Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.

SELECT p.razonsocial
FROM proveedores p
WHERE p.rfc IN (SELECT e.rfc FROM entregan e, proyectos pr WHERE pr.denominacion = 'Vamos México' AND pr.denominacion = 'Querétaro Limpio');

-- Query 8: Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.

SELECT m.descripcion
FROM materiales m
WHERE m.clave NOT IN (SELECT m.clave 
                      FROM entregan e, materiales m, proyectos pr 
                      WHERE e.clave = m.clave 
                      AND pr.numero = e.numero 
                      AND pr.denominacion = 'CIT Yucatán');

-- Query 9: Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.

SELECT p.razonsocial, AVG(e.cantidad) as cantidadPromedio
FROM entregan e, proveedores p
WHERE e.rfc = p.rfc
GROUP BY p.razonsocial
HAVING AVG(e.cantidad) > (SELECT AVG(e.cantidad) 
                          FROM entregan e, proveedores p 
                          WHERE e.rfc = p.rfc 
                          AND p.rfc = 'VAGO780901');

-- Query 10: RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.

SELECT p.rfc, p.razonsocial
FROM entregan e, proveedores p, proyectos pr
WHERE e.rfc = p.rfc
AND e.numero = pr.numero
AND pr.denominacion = 'Infonavit Durango'
AND e.fecha BETWEEN '2000-01-01' AND '2000-12-31'
GROUP BY p.rfc, p.razonsocial
HAVING SUM(e.cantidad) > (SELECT SUM(e.cantidad) 
                          FROM entregan e, proveedores p, proyectos pr 
                          WHERE e.rfc = p.rfc 
                          AND e.numero = pr.numero 
                          AND pr.denominacion = 'Infonavit Durango' 
                          AND e.fecha BETWEEN '2001-01-01' AND '2001-12-31' 
                          GROUP BY p.rfc, p.razonsocial);
