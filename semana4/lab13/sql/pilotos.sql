-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-03-2023 a las 16:26:50
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pilotos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `escuderia`
--

CREATE TABLE `escuderia` (
  `id` int(11) NOT NULL,
  `nombre` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `jefe` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `duenio` text COLLATE utf8mb4_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `escuderia`
--

INSERT INTO `escuderia` (`id`, `nombre`, `jefe`, `duenio`, `created_at`) VALUES
(1, 'Oracle Red Bull Racing\r\n', 'Christian Horner\r\n', '', '2023-03-09 16:42:00'),
(3, 'Mercedes-AMG PETRONAS F1 Team', 'Toto Wolff', '', '2023-03-09 16:42:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parrilla`
--

CREATE TABLE `parrilla` (
  `idParrilla` int(11) NOT NULL,
  `idPiloto` int(11) NOT NULL,
  `idEscuderia` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pilotos`
--

CREATE TABLE `pilotos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(80) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `numero` int(4) NOT NULL,
  `imagen` varchar(200) COLLATE utf8mb4_spanish2_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish2_ci;

--
-- Volcado de datos para la tabla `pilotos`
--

INSERT INTO `pilotos` (`id`, `nombre`, `numero`, `imagen`, `created_at`) VALUES
(7, 'Lewis Hamilton', 44, 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/2col/image.png', '2023-03-09 16:38:35'),
(8, 'Max Verstappen', 1, 'https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/2col/image.png', '2023-03-09 16:39:05');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `escuderia`
--
ALTER TABLE `escuderia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `parrilla`
--
ALTER TABLE `parrilla`
  ADD PRIMARY KEY (`idParrilla`),
  ADD KEY `idPiloto` (`idPiloto`),
  ADD KEY `idEscuderia` (`idEscuderia`);

--
-- Indices de la tabla `pilotos`
--
ALTER TABLE `pilotos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `escuderia`
--
ALTER TABLE `escuderia`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `parrilla`
--
ALTER TABLE `parrilla`
  MODIFY `idParrilla` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pilotos`
--
ALTER TABLE `pilotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `parrilla`
--
ALTER TABLE `parrilla`
  ADD CONSTRAINT `parrilla_ibfk_1` FOREIGN KEY (`idPiloto`) REFERENCES `pilotos` (`id`),
  ADD CONSTRAINT `parrilla_ibfk_2` FOREIGN KEY (`idEscuderia`) REFERENCES `escuderia` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
