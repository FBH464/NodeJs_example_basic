//Un <Blob> encapsula datos sin procesar inmutables que se pueden compartir de forma segura entre varios subprocesos de trabajo.

// 1. Crear un Blob con texto
const blob = new Blob(['Hola mundo!'], { type: 'text/plain' });

// 2. Convertirlo a bytes
blob.bytes().then((bytes) => {
  console.log("Bytes:", bytes);  
  // [72, 111, 108, 97, 32, 109, 117, 110, 100, 111, 33]
  // que corresponde a "Hola mundo!"
});

// 3. Convertirlo a texto
blob.text().then((text) => {
  console.log("Texto:", text);  
  // "Hola mundo!"
});

// 4. Convertirlo a un ArrayBuffer (útil para binarios, imágenes, etc.)
blob.arrayBuffer().then((buffer) => {
  console.log("ArrayBuffer:", buffer);
  console.log("ArrayBuffer -> Uint8Array:", new Uint8Array(buffer));
});

// 5. Crear una URL temporal para descargar o mostrar el Blob
const url = URL.createObjectURL(blob);

// Mostrar el contenido en un enlace
const link = document.createElement("a");
link.href = url;
link.download = "ejemplo.txt";
link.textContent = "Descargar archivo";
document.body.appendChild(link);

// 6. Mostrarlo en un <p> como texto leído
blob.text().then((text) => {
  const p = document.createElement("p");
  p.textContent = "Contenido del Blob: " + text;
  document.body.appendChild(p);
});
