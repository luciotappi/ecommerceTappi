const Data =[
    {
        "id": 0,  
        "title": "Arduino Uno",
          "description": "Placa de desarrollo Arduino Uno basada en ATMega328P. Chip CH340 + Cable de programacion",
          "price":"$4000",
          "info":"https://arduino.cl/arduino-uno/", 
          "image":"../images/arduino-uno.png",
          "stock": 5,
          "initial":1
          
          
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
  
      const getFetch = new Promise((res,rej)=>{

        let condition = true
        if (condition){
            setTimeout(()=>{
                res(Data)
            },2000);
        }
        else{

            rej(console.log("No hay datos"))
        }
      })

      export default getFetch;