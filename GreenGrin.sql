USE [master]
GO
/****** Object:  Database [GreenGrin]    Script Date: 24/4/2023 08:36:40 ******/
CREATE DATABASE [GreenGrin]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'GreenGrin', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\GreenGrin.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'GreenGrin_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\GreenGrin_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [GreenGrin] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [GreenGrin].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [GreenGrin] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [GreenGrin] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [GreenGrin] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [GreenGrin] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [GreenGrin] SET ARITHABORT OFF 
GO
ALTER DATABASE [GreenGrin] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [GreenGrin] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [GreenGrin] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [GreenGrin] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [GreenGrin] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [GreenGrin] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [GreenGrin] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [GreenGrin] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [GreenGrin] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [GreenGrin] SET  DISABLE_BROKER 
GO
ALTER DATABASE [GreenGrin] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [GreenGrin] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [GreenGrin] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [GreenGrin] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [GreenGrin] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [GreenGrin] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [GreenGrin] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [GreenGrin] SET RECOVERY FULL 
GO
ALTER DATABASE [GreenGrin] SET  MULTI_USER 
GO
ALTER DATABASE [GreenGrin] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [GreenGrin] SET DB_CHAINING OFF 
GO
ALTER DATABASE [GreenGrin] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [GreenGrin] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [GreenGrin] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'GreenGrin', N'ON'
GO
ALTER DATABASE [GreenGrin] SET QUERY_STORE = OFF
GO
USE [GreenGrin]
GO
/****** Object:  User [alumno]    Script Date: 24/4/2023 08:36:40 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[Estaciones]    Script Date: 24/4/2023 08:36:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Estaciones](
	[Id] [int] NOT NULL,
	[Lugar] [varchar](50) NOT NULL,
	[X] [int] NOT NULL,
	[Y] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Movimientos]    Script Date: 24/4/2023 08:36:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Movimientos](
	[Id] [int] NOT NULL,
	[Id_Estaciones] [int] NOT NULL,
	[Id_Usuario] [int] NOT NULL,
	[Fecha] [date] NOT NULL,
	[CantBotellas] [int] NOT NULL,
	[Puntos] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuarios]    Script Date: 24/4/2023 08:36:40 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuarios](
	[Id] [int] NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Apellido] [varchar](50) NOT NULL,
	[Nacionalidad] [varchar](50) NOT NULL,
	[DNI] [int] NOT NULL,
	[FechaNacimiento] [date] NOT NULL,
	[Contraseña] [varchar](50) NOT NULL,
	[Mail] [varchar](50) NOT NULL,
	[Puntos] [int] NOT NULL
) ON [PRIMARY]
GO
USE [master]
GO
ALTER DATABASE [GreenGrin] SET  READ_WRITE 
GO
