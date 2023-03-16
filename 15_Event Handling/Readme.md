                                                                15_Event Handling
•	Event handling adalah proses menangani action atau interaction yang dilakukan user pada element-element di dalam aplikasi web. Dalam ReactJS, event handling bisa dilakukan dengan menambahkan event listener pada element tersebut.

Beberapa contoh list event:
1.	Clipboard Events (promise terpenuhi)
2.	Form  events (onChange, onSubmit)
3.	Mouse events (onClick, onDoubleclick, onMouseOver)
4.	Generic events (onError, onLoad)

•	Komponen React memiliki objek state bawaan. Objek status adalah tempat Anda menyimpan nilai properti yang dimiliki komponen tersebut. Ketika objek state berubah, komponen merender ulang. Kesimpulannya State adalah sebuah object untuk menyimpan data pada React dan akan di render atau muat ulang ketika data mengalami perubahan.

•	Penanganan Event pada Class Component 

Jika kita menggunakan class component, penanganan event dapat dilakukan dengan menggunakan method yang sudah disediakan oleh ReactJS, yaitu this.setState(). Sebagai contoh, kita ingin menambahkan event handler untuk mengubah warna background pada komponen App saat tombol ditekan.
