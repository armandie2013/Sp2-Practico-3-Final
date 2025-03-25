import {
  obtenerSuperheroePorId,
  obtenerTodosLosSuperheroes,
  buscarSuperheroesPorAtributo,
  obtenerSuperheroesMayoresDe30,
  crearNuevoSuperheroe,
  actualizarSuperheroe
} from "../services/superheroesService.mjs";
import {
  renderizarSuperheroe,
  renderizarListaSuperheroes,
} from "../views/responseView.mjs";


export async function obtenerSuperheroePorIdController(req, res) {
  try {
    const { id } = req.params;
    const superheroe = await obtenerSuperheroePorId(id);
    if (!superheroe) {
      return res.status(404).send({ mensaje: "Superheroe no encontrado" });
    }
    const superheroeFormateado = renderizarSuperheroe(superheroe);
    res.status(200).json(superheroeFormateado);
  } catch (error) {
    res.status(500).send({
      mensaje: "Error al obtener el superheroe",
      error: error.message,
    });
  }
}

export async function obtenerTodosLosSuperheroesController(req, res) {
  try {
    const superheroes = await obtenerTodosLosSuperheroes();

    const superheroeFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroeFormateados);
  } catch (error) {
    res.status(500).send({
      mensaje: "Error al obtener los superheroes",
      error: error.message,
    });
  }
}

export async function buscarSuperheroesPorAtributoController(req, res) {
  try {
    const { atributo, valor } = req.params;
    const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
    if (superheroes.length === 0) {
      return res
        .status(404)
        .send({ mensaje: "No se encontraron superheroes con ese atributo" });
    }
    const superheroeFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroeFormateados);
  } catch (error) {
    res.status(500).send({
      mensaje: "Error al buscar los superheroes",
      error: error.message,
    });
  }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
  try {
    const superheroes = await obtenerSuperheroesMayoresDe30();
    if (superheroes.length === 0) {
      return res
        .status(404)
        .send({ mensaje: "No se encontraron superheroes mayores de 30 años" });
    }
    const superheroeFormateados = renderizarListaSuperheroes(superheroes);
    res.status(200).json(superheroeFormateados);
  } catch (error) {
    res.status(500).send({
      mensaje: "Error al obtener superheroes mayores de 30",
      error: error.message,
    });
  }
}

// // ENDPOINT SPRINT 3 TRABAJO PRACTICO 1 //

export async function crearNuevoSuperheroeController(req, res) {
  try {
    const datos = req.body;
    const superheroeCreado = await crearNuevoSuperheroe(datos);
    if (!superheroeCreado) {
      return res.status(404).send({ mensaje: "Superheroe no econtrado" });
    }
    const superheroeFormateado = renderizarSuperheroe(superheroeCreado);
    res.status(200).json(superheroeFormateado);
  } catch (error) {
    res
      .status(500)
      .send({
        mensaje: "Error al crear el nuevo superheroe",
        error: error.message,
      });
  }
}

export async function actualizarSuperheroeController(req, res) {
  try {
    const { id } = req.params;
    const datosActualizar = req.body;

    console.log(id);
    console.log(typeof id);
    const superheroeActualizado = await actualizarSuperheroe(
      id,
      datosActualizar
    );

    if (!superheroeActualizado) {
      return res
        .status(404)
        .send({ mensaje: "No se contro el superheroe a actualizar" });
    }

    const superheroeFormateado = renderizarSuperheroe(superheroeActualizado);
    res.status(200).json(superheroeFormateado);
  } catch (error) {
    res
      .status(500)
      .send({
        mensaje: "Error al actualizar el superhéroe",
        error: error.message,
      });
  }
}
