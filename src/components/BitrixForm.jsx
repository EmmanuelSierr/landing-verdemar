import { useEffect } from "react";
import "../styles.css";

const BitrixForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.dataset.b24Form = "inline/261/zgj5ej"; // Cambia a "inline" según tu script
    script.dataset.skipMoving = "true";
    script.src = "https://cdn.bitrix24.co/b27676889/crm/form/loader_261.js";

    // Inserta el script directamente en el contenedor del formulario
    const formContainer = document.getElementById("bitrix-form");
    formContainer.appendChild(script);

    return () => {
      // Limpieza si el componente se desmonta
      formContainer.removeChild(script);
    };
  }, []);

  return (
    <div className="flex pr-4 " >
      <img
        src="../ESCALADAS_ALTOS_DEL_MAR/ima5.png"
        alt="Imagen relacionada"
        style={{ width: "70%", height: "auto", overflow: "hidden", objectFit: "cover" }}
      />
      {/* Contenedor donde se renderizará el formulario */}
      <div id="bitrix-form"></div>
    </div>
    
  );
};


export default BitrixForm;
