import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';

class SuperHeroRepository extends IRepository{
    async obtenerPorId(id){
        return await SuperHero.findById(id);
    }
    async obtenerTodos(){
        return await SuperHero.find({});
    }
    async buscarPorAtributo(atributo, valor){    
        
        return await SuperHero.find({ [atributo]: valor });

    // Alternativa más clara: //
    /*const busquedaAtributoValor = {};
    busquedaAtributoValor[atributo] = valor;
    return await SuperHero.find(busquedaAtributoValor);*/
       
    }
    async obtenerMayoresDe30(){
        
        // FILTRADO POR METODO DE CARGA EN MEMORIA //
        
        const superheroes = await SuperHero.find({});
        return superheroes.filter(superheroe => superheroe.edad > 30);
        
        
        // FILTRADO POR METODO DE LA BASE DE DATOS MAS EFECTIVO //
        /*
        return await SuperHero.find({ edad: { $gt: 30 } });
        */
    }
}

export default new SuperHeroRepository();