

const {Builder, By, Key, until} = require('selenium-webdriver');
const fs = require('fs');
const chrome = require('selenium-webdriver/chrome');
let opts = new chrome.Options();


(async function example() {
  let driver = await new Builder()
  		.forBrowser('chrome')
  		.setChromeOptions(opts.headless())
  		.build();
  try {
  	//entrar a una pagina web
    //await driver.get('https://es.wikipedia.org/wiki/Monumento_a_Jos%C3%A9_Mart%C3%AD_(Madrid)');

    


    //busacar elementos en la pagina web 
    /*
  	 *	esta By.id
  	 *	esta By.css
  	 *	esta By.tagName
  	 *	hay mas pero yo considero estas las mas importates
     */
    //let passwordField = await driver.findElement(By.id("wpPassword1"));



    //buscar de forma relativa (no me funciona asi de que siquin sin mas)
    //let email = await driver.findElements(By.tagName('input').above(passwordField));
 

    /*

    // aqui entro al enlace de madrid
    await driver.findElement(By.css('#mw-content-text > div.mw-parser-output > p:nth-child(2) > a:nth-child(2)')).click();


    //Obtener la url actual
    let url = await driver.getCurrentUrl();
    console.log(await driver.getTitle());
    console.log(url)//en teoria aqui me paras el url de madrid

    //retroceder desde el navigator
    await driver.navigate().back();

    url = await driver.getCurrentUrl();
    console.log(url);//aquie la url del monumento jose


    //avanzar desde el boton del navigator
    await driver.navigate().forward();

    url = await driver.getCurrentUrl();
    console.log(url);// aqui otraves la url de madrid


	//refrescar la pagina
	await driver.navigate().refresh();

	*/




	/*
	await driver.get('https://www.freecodecamp.org/news/the-a-target-html-attribute-explained/#:~:text=A%20target%20attribute%20with%20the,a%20new%20window%20or%20tab.&text=A%20target%20attribute%20with%20the%20value%20of%20%E2%80%9C_self%E2%80%9D%20opens%20the,not%20need%20to%20be%20specified).');

	//Almacena el ID de la ventana original
	const originalWindow = await driver.getWindowHandle();
	console.log(originalWindow)


	//Comprueba que no existen otras ventanas abiertas previamente
	console.assert((await driver.getAllWindowHandles()).length === 1);
	console.log(await driver.getAllWindowHandles())

	//Haz clic en el enlace el cual abre una nueva ventana
	await driver.findElement(By.css('#learn-to-code-cta')).click();

	//Espera a la nueva ventana o pestaña
	console.log('si llego a async')

	await driver.wait(
	    async () => (await driver.getAllWindowHandles()).length === 2,
	    30000
	  );

	//Recorrelas hasta encontrar el controlador de la nueva ventana
	const windows = await driver.getAllWindowHandles();
	windows.forEach(async handle => {
	  if (handle !== originalWindow) {
	    await driver.switchTo().window(handle);
	  }
	});

	//Espera a que la nueva ventana cargue su contenido
	await driver.wait(until.titleIs('Selenium documentation'), 10000);
	  
	*/



	


	await driver.get('https://www.hispachan.org');

	//const originalWindow = await driver.getWindowHandle();

	



	/*
	 *	Control De las Pestañas
	 *		Pestallas y Ventanas
	 *
	 */
	 //abre una nueva pestaña y cambia el foco a ella, Pero no el control!!!
	 //await driver.switchTo().newWindow('tab');
	 

	 //abre una nueva Ventana y cambia el foco a ella , PERO NO EL CONTROL#!!!!
	 //await driver.switchTo().newWindow('window');
	 

	/*
	 *	Control De las Pestañas
	 *		Pestallas y Ventanas
	 *	Cerrar pestañas
	 */
		 //Cierra una ventana o pestaña
		//await driver.close();
		
		//Cambia el controlador a la ventana o pestaña original
		//await driver.switchTo().window(originalWindow);
		
	   	



		/**
		 * Ejemplo usando Mocha
		 * https://mochajs.org/#hooks
		 *
		 *
		 *	Si no estas ejecutando el WebDriver en un contexto que no 
		 * 	es de tests, puedes considerar el usar try / finally los 
		 *	cuales son soportadas por la gran mayoría de lenguajes de 
		 *	programacion de esta manera cuando aparezca una excepción 
		 * 	la sesión del WebDriver saldrá correctamente.
		 
		after('Tear down', async function () {
		  await driver.quit();
		});
  		*/









		//   		Obtener el tamaño de la ventana
		// Obtiene el tamaño de la ventana del navegador en pixeles.
		
		// Accede a cada dimensión individualmente
		//const { width, height } = await driver.manage().window().getRect();

		// // O almacénalas para acceder a ellas mas tarde
		// const rect = await driver.manage().window().getRect();
		// const width1 = rect.width;
		// const height1 = rect.height;
		// console.log(width1)
		// console.log(height1)
		 

		// Fija el tamaño de la ventana
		// Recupera la ventana y fija el tamaño de esta.

		//await driver.manage().window().setRect({ wigth: 200, height: 300 });





		/**
		 *	Obten la posicion de la ventana
		 *	Obtiene la posiciones de las coordernadas en el sistema 
		 *	arriba izquierda de la ventana del navegador.
		 *
		 */


		// Accede a cada dimensión individualmente
		// const { x, y } = await driver.manage().window().getRect();

		// // O almacénalas para acceder a ellas mas tarde
		// const rect = await driver.manage().window().getRect();
		// const x1 = rect.x;
		// const y1 = rect.y;
		// console.log(x1);
		// console.log(y1);
  
		/**
		 * Fija la posición de la ventana
		 *	Mueve la ventana a la posición deseada.
		 *
		 */

		// Mueve la ventana arriba izquierda del monitor principal		  
		// await driver.manage().window().setRect({ x: 0, y: 0 });





		// await driver.manage().window().maximize();



		// await driver.manage().window().minimize();


		// await driver.manage().window().fullscreen();




		/**
		 *	TOMARR SCREENSHOT!!!!
		 *
		 */
		// let elemento = await driver.findElement(By.css('body > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(2) > div'));
		// let encodedString = await elemento.takeScreenshot();
		// //para tomar Screenshot a lo que se ven enla pantalla
		// //en  vez de  "elemento" se cambia por "driver."
		// await fs.writeFileSync('./elemento.png', encodedString, "base64");





		/**
		 *	Ejecutamos Script de js desde aqui xDXD
		 *
		 */
		// let loQueEstaDebajoElLogo = await driver.findElement(By.css('body > table:nth-child(3) > tbody > tr > td'));
		// let text = await driver.executeScript('return arguments[0].innerText', loQueEstaDebajoElLogo);
		// console.log(text)









		/**
		 *
		 *	Descarga La pagina en Forma de Pdf
		 *
		 */

		 // let base64 = await driver.printPage({pageRanges:["1-2"]});
		 // await fs.writeFileSync('./test.pdf', base64, "base64");






















    //await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
   // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
  } finally {
    await driver.quit();
  }
})();