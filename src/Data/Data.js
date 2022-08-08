const Data =[
    {
        "id": 0,  
        "title": "Arduino Uno",
          "description": "Placa de desarrollo Arduino Uno basada en ATMega328P. Chip CH340 + Cable de programacion",
          "descriptionLarge": "Microcontrolador: ATmega328.Tension de Operacion (nivel logico): 5 V. Tension de Alimentacion (pin Vin): 7-12 V. Pines E/S Digitales: 14 (de los cuales 6 proveen de salida PWM). Entradas Analogicas: 6 (pueden usarse como digitales). Corriente max por cada PIN de E/S: 40 mA. Memoria Flash: 32 KB de los cuales 0.5KB son usados por el bootloader. SRAM: 2 KB. EEPROM: 1 KB. Frecuencia de reloj:16 MHz",
          "price":"$4000",
          "info":"https://arduino.cl/arduino-uno/", 
          "image":"../images/arduino-uno.png",
          "stock": 5,
          "initial":3
          
          
        },
        
        {
          "id": 1,
          "title": "ESP32",
          "description": "Placa de desarollo ESP32 con procesador Tensilica Xtensa 32-bit LX6, antena Wi-Fi y receptor Bluetooth integrado",
          "price":"$3000",
          "info":"http://esp32.net/",
          "image":"../images/esp32.png",
          "stock":32,
          "initial":1
          
          
        },
      
        {
          "id": 2,  
          "title": "STM32",
          "description": "Placa de desarrollo STM32 Blue pill basada en STM32F103C8T6 STM32 Blue Pill CPU ARM 32 Cortex-M3",
          "price":"$2500",
          "info":"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",
          "image":"../images/stm32.png",
          "stock":0,
          "initial":1 
          
        } 
      ]
  

      const getItem = function (Item){

        return new Promise((res,rej)=>
        {

          let condition = true
          if (condition){
            setTimeout(()=>{
            if (Item != null)  
            {
              res(Data[Item])

            }else
            {
              res(Data)

            }
              },2000);
            }
            else{

                rej(console.log("No hay datos"))
            }
          })
          }
      // const getFetch = new Promise((res,rej)=>{

      //   let condition = true
      //   if (condition){
      //       setTimeout(()=>{
      //           res(Data)
      //       },2000);
      //   }
      //   else{

      //       rej(console.log("No hay datos"))
      //   }
      // })

  
      // export default getFetch;
       export default getItem;