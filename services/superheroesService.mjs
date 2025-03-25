import superHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorId(id) {
    return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

export async function obtenerSuperheroesMayoresDe30() {
    return await superHeroRepository.obtenerMayoresDe30();
}

// SPRINT 3 TP 1 //
//  CREAR NUEVO //
export async function crearNuevoSuperheroe(datosNuevoSuperheroe){
    console.log("Datos recibidos para insertar:", datosNuevoSuperheroe);
    return await superHeroRepository.insertarSuperheroe(datosNuevoSuperheroe);
}

// ACTUALIZAR //
export async function actualizarSuperheroe(id, datosActualizarSuperheroe) {
    return await superHeroRepository.actualizarSuperheroe(id, datosActualizarSuperheroe);    
}