import { useState } from "react";

export default function CustomEmailForm() {
  const [email, setEmail] = useState("richthewriterguy@gmail.com");

  return (
    <div className="w-full" id="ghl-form">
      <div className="form-iframe-wrapper">
        <iframe
          src="https://link.goexpandnow.com/widget/form/9oIwOEVxyUx4GgEzgNPK"
          style={{
            width: "100%",
            height: "432px",
            border: "none",
            borderRadius: "3px"
          }}
          id="inline-9oIwOEVxyUx4GgEzgNPK"
          data-layout="{'id':'9oIwOEVxyUx4GgEzgNPK','name':'NOS Landing Page Form','type':'form','width':400,'height':432,'layout':'embed','data-height':'432','data-layout-iframe-id':'inline-9oIwOEVxyUx4GgEzgNPK','data-form-id':'9oIwOEVxyUx4GgEzgNPK'}"
          title="NOS Landing Page Form"
        />
      </div>
      <script src="https://link.goexpandnow.com/js/form_embed.js"></script>
    </div>
  );
}
