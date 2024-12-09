import { useEffect } from "react";
import "../styles.css";

const BitrixForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.dataset.b24Form = "inline/267/27njvw"; // Cambia a "inline" según tu script
    script.dataset.skipMoving = "true";
    script.src = "https://cdn.bitrix24.co/b27676889/crm/form/loader_267.js";


/*
    <script data-b24-form="inline/267/27njvw" data-skip-moving="true">
(function(w,d,u){
var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
})(window,document,'https://cdn.bitrix24.co/b27676889/crm/form/loader_267.js');
</script>*/


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
