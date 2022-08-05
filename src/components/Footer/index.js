

export default function Footer(){


    return (
        <div>
            {/* <!-- Footer --> */}
            <footer class="bg-dark text-center text-white">
            {/* <!-- Grid container --> */}
          <div class="container p-4">
            {/* <!-- Section: Social media --> */}
            <section class="mb-4">
              {/* <!-- Facebook --> */}
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="bi bi-facebook"></i></a>

              {/* <!-- Twitter --> */}
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="bi bi-twitter"></i
              ></a>
        
             
        
              {/* <!-- Instagram --> */}
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="bi bi-instagram"></i
              ></a>
        
              {/* <!-- Linkedin --> */}
              <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i class="bi bi-linkedin"></i
              ></a>
        
              
            </section>
            {/* <!-- Section: Social media --> */}
        
            {/* <!-- Section: Form --> */}
            <section class="">
              <form action="">
                {/* <!--Grid row--> */}
                <div class="row d-flex justify-content-center">
                  {/* <!--Grid column--> */}
                  <div class="col-auto">
                    <p class="pt-2">
                      <strong>Inscribite a nuestro Newsletter!</strong>
                    </p>
                  </div>
                  {/* <!--Grid column--> */}
        
                  {/* <!--Grid column--> */}
                  <div class="col-md-5 col-12">
                    {/* <!-- Email input --> */}
                    <div class="form-outline form-white mb-4">
                      <input type="email" id="form5Example21" class="form-control" />
                      <label class="form-label" htmlFor="form5Example21">Correo electronico</label>
                    </div>
                  </div>
                  {/* <!--Grid column--> */}
        
                  {/* <!--Grid column--> */}
                  <div class="col-auto">
                    {/* <!-- Submit button --> */}
                    <button type="submit" class="btn btn-outline-light mb-4">
                      Suscribirme
                    </button>
                  </div>
                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
              </form>
            </section>
            {/* <!-- Section: Form --> */}
        
            {/* <!-- Section: Text --> */}
            
            {/* <!-- Section: Text --> */}
        
            {/* <!-- Section: Links --> */}
            <section class="">
              {/* <!--Grid row--> */}
              <div class="row">
                {/* <!--Grid column--> */}
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Enlaces Utiles</h5>
        
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white">Sobre nosotros</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">Preguntas frecuentes</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">Garantia y devolucion</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">Contacte con nosotros</a>
                    </li>
                  </ul>
                </div>
                {/* <!--Grid column--> */}

                 {/* <!--Grid column--> */}
                 <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  

                  <img src="../images/Tappi-logo.png" style = {{width:'30%',height: 'auto'}}/>
                  {/* <h5 class="text-uppercase">Enlaces Utiles</h5>
                    
                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-white">Sobre nosotros</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">Preguntas frecuentes</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">Garantia y devolucion</a>
                    </li>
                    <li>
                      <a href="#!" class="text-white">Contacte con nosotros</a>
                    </li>
                  </ul> */}
                </div>
                {/* <!--Grid column--> */}
        
                {/* <!--Grid column--> */}
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Contacte con nosotros</h5>
        
                  <ul class="list-unstyled mb-0">
                     <p class="text-start">
                        <i class="bi bi-whatsapp"></i>  +54 9 telefono
                    </p>
                    <p class="text-start">
                        <i class="bi bi-geo"></i>   Direccion , Mar del Plata, Buenos Aires
                    </p >
                    <p class="text-start">
                    <i class="bi bi-envelope"></i>          info@tappi.electronics.com.ar
                    </p >
                   
                  </ul>
                </div>
                {/* <!--Grid column--> */}
        
                
              </div>
              {/* <!--Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}
          </div>
          {/* <!-- Grid container --> */}
        
          {/* <!-- Copyright --> */}
          <div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2022 Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}

        </div>
       

        );


}

