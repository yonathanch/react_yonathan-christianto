                                            20_Global State Management and Data fetching

•	Saat yang tepat untuk menggunakan Redux :
1.	Banyak state yang perlu ditaruh di banyak tempat.
2.	State pada app sering berubah.
3.	Logic untuk mengubah state kompleks.
4.	Ukuran codebase yang sedang-besar,dan dikerjakan oleh banyak orang.
5.	Perlu untuk mengetahui bagaimana state diupdate seiring waktu.

Redux Libraries dan Tools:
1.	React -redux
2.	Redux Toolkit
3.	Redux Devtoolsextensions

•	Thunk Middleware untuk redux yang memungkinkan kita untuk membuat action creator yang mengembalikan function bukan action,Redux thunk diperlukan untuk : 
1.	Menghandle side effect logic yang kompleks.
2.	Untuk logic async seperti request data.

•	Persite dan Hasura
-	Persisted state atau persistent state adalah cara untuk menyimpan data state di React agar tetap tersedia dan tidak hilang ketika halaman web di-refresh atau ditutup dan dibuka kembali.
-	Hasura adalah platform yang menyediakan GraphQL API untuk mengakses data dan layanan back-end.
