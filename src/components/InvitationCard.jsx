const InvitationCard = ({ data }) => {
    // Si data no existe aún (por si carga asíncrono), evitamos que rompa
    if (!data) return null;

    return (
        <div className="card h-100 border-0 shadow-sm invitation-card mx-auto">
            <div className="p-2 bg-pink-pastel">
                <div className="phone-mockup">
                    <div className="phone-camera" />
                    <div className="phone-screen d-flex align-items-center justify-content-center w-100">
                        <img 
                            src={data.img} 
                            alt={data.title} 
                            className="img-fluid w-auto" 
                        />
                    </div>
                </div>
            </div>
            <div className="card-body text-center">
                <h3 className="h4 text-danger-emphasis">{data.title}</h3>
                <p className="text-muted">{data.text}</p>
                <a 
                    href={data.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn bg-pink-pastel text-dark border-0 w-100"
                >
                    {/* Texto fijo por ahora para que el botón no salga vacío */}
                    Ver Invitación
                </a>
            </div>
        </div>
    );
};

export default InvitationCard;