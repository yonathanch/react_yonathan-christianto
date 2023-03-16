                                                                17_React Hooks
•	React Hooks adalah fitur baru pada React versi 16.8 yang memungkinkan penggunaan state dan fitur React lainnya pada functional component. Sebelum adanya React Hooks, penggunaan state hanya dapat dilakukan pada class component dengan menggunakan setState(). Dengan adanya React Hooks, state dan lifecycle methods dapat digunakan pada functional component, sehingga kode menjadi lebih sederhana dan mudah dipahami.

•	Beberapa contoh React Hooks yang sering digunakan antara lain:
1.	useState() : digunakan untuk mengubah dan menyimpan state pada functional component.
2.	useEffect() : digunakan untuk menangani side effect pada component, seperti fetching data dari API atau manipulasi DOM.
3.	useContext() : digunakan untuk mengakses context pada React.
4.	useRef() : digunakan untuk mengakses dan memodifikasi elemen HTML pada component.

•	Aturan pada Hooks
1.	Hanya panggil hooks di Tingkat atas

Jangan memanggil hooks dari dalam loops,conditions, atau nested functions.
2.	Hanya panggil Hooks dari fungsi-fungsi react

