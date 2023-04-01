                                                                          21_React Testing

•	Testing adalah proses memverikasi bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi.Test assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.

•	Manfaat Testing pada REACT JS :
1.	Memastikan kualitas dan keandalan kode Dengan melakukan pengujian, kita dapat memastikan bahwa kode yang telah dibuat berfungsi sebagaimana mestinya. Pengujian dapat menemukan bug dan masalah lainnya sebelum aplikasi digunakan oleh pengguna.
2.	Membantu dalam debugging Jika ada masalah pada aplikasi, testing dapat membantu dalam memperbaiki masalah tersebut. Pengujian memudahkan kita dalam menemukan letak kesalahan, sehingga perbaikan dapat dilakukan dengan lebih cepat dan mudah.
3.	Meningkatkan kualitas pengembangan Testing memastikan bahwa setiap perubahan pada kode tidak merusak fungsionalitas yang ada dan juga tidak menimbulkan bug baru. Hal ini memastikan bahwa aplikasi selalu dalam keadaan yang stabil dan fungsional, sehingga meningkatkan kualitas pengembangan.
4.	Meningkatkan produktivitas tim Dengan melakukan pengujian secara teratur, kita dapat mengurangi waktu dan biaya yang diperlukan untuk debugging, memperbaiki dan menjaga kualitas kode. Hal ini pada akhirnya akan meningkatkan produktivitas tim pengembang.
5.	Memudahkan dalam melakukan refactoring Pengujian memudahkan dalam melakukan refactoring kode karena kita dapat memastikan bahwa fungsionalitas yang ada tidak berubah dan tidak menimbulkan bug baru setelah melakukan perubahan kode.

•	RTL (React Testing Library) adalah sebuah library testing untuk React yang membantu pengembang dalam menguji aplikasi React dengan lebih mudah dan efektif. Berikut adalah contoh membuat basic testing dengan RTL:
1.	Install RTL
2.	Membuat test file
3.	Import library dan file yang akan diuji
4.	Menuliskan test case

Code Test Case seperti:
1.	describe digunakan untuk mendefinisikan group dari test case kita.
2.	test digunakan untuk menuliskan test case dengan deskripsi dan kode yang akan dijalankan.
3.	render digunakan untuk merender komponen yang akan diuji.
4.	screen.getByText digunakan untuk mencari elemen pada tampilan yang sesuai dengan teks yang diinginkan.
5.	expect digunakan untuk mengecek apakah elemen yang ditemukan dengan teks yang diinginkan ada di dalam tampilan atau tidak.



