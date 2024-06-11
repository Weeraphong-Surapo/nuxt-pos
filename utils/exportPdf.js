import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Base64 encoded font (Replace with the actual Base64 string)
const THSarabunNewBase64 = 'data:font/truetype;charset=utf-8;base64'; 

export function exportToPdf(data, fileName) {
  const doc = new jsPDF();

  // Add the custom font
  doc.addFileToVFS('THSarabunNew.ttf', THSarabunNewBase64);
  doc.addFont('THSarabunNew.ttf', 'THSarabunNew', 'normal');
  doc.setFont('THSarabunNew');

  // Define table columns
  const columns = [
    { header: 'ID', dataKey: 'id' },
    { header: 'สินค้า', dataKey: 'name' },
    { header: 'ราคา', dataKey: 'price' },
    { header: 'จำนวน', dataKey: 'quantity' },
    { header: 'รูปภาพ', dataKey: 'file_path' },
    { header: 'รายละเอียด', dataKey: 'description' },
  ];

  // Generate table rows
  const rows = data.map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: product.quantity ?? 'N/A',
    file_path: product.file_path ?? 'N/A',
    description: product.description ?? 'N/A'
  }));

  // Add the table to the PDF
  doc.autoTable({
    columns,
    body: rows,
    startY: 10,
    theme: 'grid'
  });

  // Save the PDF
  doc.save(`${fileName}.pdf`);
}
