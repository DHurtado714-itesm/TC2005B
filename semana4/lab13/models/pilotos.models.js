const pilotos = [
  {
    nombre: "Lewis Hamilton",
    numero: "44",
    escuderia: "Mercedes",
    imagen:
      "https://www.formula1.com/content/dam/fom-website/drivers/L/Hamilton/Lewis_Hamilton_2019/Profile%20Images/2019_Lewis_Hamilton_01.jpg.transform/2col-retina/image.jpg",
  },
  {
    nombre: "Valtteri Bottas",
    numero: "77",
    escuderia: "Alfa Romeo",
    imagen:
      "https://www.formula1.com/content/dam/fom-website/drivers/L/Hamilton/Lewis_Hamilton_2019/Profile%20Images/2019_Lewis_Hamilton_01.jpg.transform/2col-retina/image.jpg",
  },
  {
    nombre: "Max Verstappen",
    numero: "1",
    escuderia: "Red Bull",
    imagen:
    "https://www.formula1.com/content/dam/fom-website/drivers/L/Hamilton/Lewis_Hamilton_2019/Profile%20Images/2019_Lewis_Hamilton_01.jpg.transform/2col-retina/image.jpg",
  }
];

module.exports = class Piloto {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(nuevo_piloto) {
    this.nombre = nuevo_piloto.nombre || "Stig";
    this.numero = nuevo_piloto.numero || "0";
    this.escuderia = nuevo_piloto.escuderia || "Top Gear";
    this.imagen = nuevo_piloto.imagen || "";
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    pilotos.push(this);
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchAll() {
    return pilotos;
  }
};
