import Vapor from 'laravel-vapor';

export const configureVapor = () => {
    Vapor.config({
        assetDomain: process.env.REACT_APP_VAPOR_ASSET_DOMAIN,
        basePath: '/',
    });
};

export default Vapor;