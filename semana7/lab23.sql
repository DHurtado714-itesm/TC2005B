-- Author: Daniel Hurtado

-- Stored procedures

-- Crear un procedimiento almacenado que permita insertar un nuevo registro en la tabla de proveedores.

CREATE PROCEDURE `agregarProveedor`(IN `uRfc` VARCHAR(15) CHARSET utf8, IN `uRazonsocial` VARCHAR(40) CHARSET utf8) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER INSERT INTO proveedores VALUES (uRfc, uRazonsocial);

-- Crear un proceddimiento almacenado que elimine un registro de la tabla de materiales

CREATE PROCEDURE `eliminarMaterial`(IN `uClave` INT) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER DELETE FROM materiales WHERE clave = uClave;

-- Crear un procedimiento que elimine un registro de materiales segun el patron de descripcion

CREATE DEFINER=`root`@`localhost` PROCEDURE `eliminarMaterial`(IN `uClave` INT, IN `uDescripcion` VARCHAR(40), IN `uPrecio` FLOAT, IN `uImpuesto` FLOAT, IN `uPorcentageImpuesto` FLOAT) NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER DELETE FROM materiales WHERE materiales.descripcion LIKE '%' + uDescripcion + '%'

-- Crear una funcion que determine el precio promedio de los materiales

CREATE FUNCTION `precioPromedio`() RETURNS FLOAT NOT DETERMINISTIC CONTAINS SQL SQL SECURITY DEFINER return (SELECT AVG(m.precio) as 'Precio Promedio'
        FROM materiales m)