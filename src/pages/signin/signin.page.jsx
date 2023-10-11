
import './signin.styles.css';

const SigninPage = () => {
  return ( 
    <div className="ui grid centered signin">
      <div className='six wide column'>
        <div className="ui card">
          <div className="content d-flex justify-content-around align-items-center">
            <img src="/logo/jumas-inversiones-bg-white.png" alt="" />
            <p className='header'>
              <a href="/signin">juma's finance</a> 
              &nbsp;| Iniciar sesión
            </p>
          </div>
          <div className="content">
            <form action="" className="ui form">
              
              <label htmlFor="">Correo electrónico</label>
              <div class="ui corner labeled input w-100 field">
                <input type="email" placeholder="Correo electrónico" />
                <div class="ui corner label">
                  <i class="envelope outline icon"></i>
                </div>
              </div>

              <label htmlFor="">Contraseña </label>
              <div class="ui corner labeled input w-100 field">
                <input type="password" placeholder="Contraseña" />
                <div class="ui corner label">
                  <i class="key icon"></i>
                </div>
              </div>

              <button class="ui button primary" type="submit">Inicia sesión</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default SigninPage;