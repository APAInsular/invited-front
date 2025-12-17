import LOGO from "../../../Images/Logo_invited_recortado-removebg-preview.png";


const FooterBranding = () => (
  <section>
    <h2 className="text-center">Hecho con mucho amor por el equipo de</h2>
    <div className="d-flex justify-content-center mt-3">
      <img className="logo" src={LOGO} alt="Invited" />
    </div>
  </section>
);

export default FooterBranding;