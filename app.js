const qrText=document.getElementById("qr-text");
const sizes=document.getElementById('sizes');
const generateBtn=document.getElementById('generateBtn');
const downloadBtn=document.getElementById('downloadBtn');
const qrImage=document.getElementById('qrImage');
const qrContainer=document.querySelector('qr-body');

let size=sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    generateQRcode();
});
function generateQRcode(){
qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
}



