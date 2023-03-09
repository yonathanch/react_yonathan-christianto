                                                                14_ React Fundamental
                                                                
•	REACT COMPONENT

Komponen mempermudah Anda untuk memecah antarmuka pengguna menjadi bagian tersendiri, bagian yang bisa digunakan kembali, dan berpikir tentang setiap potongan dalam isolasi.
Secara konsep, komponen mirip dengan fungsi pada Javascript. Komponen menerima beberapa masukan (biasa disebut “props”) dan mengembalikan element React yang mendeskripsikan apa yang seharusnya tampil pada layar.

•	REACT LIFECYCLE

Setiap React component akan melewati 3 fase kehidupan (lifecycle):
1.	Mounting (Fase dimana component dibuat dan mulai ditambahkan ke DOM.)
2.	Updating  (Fase dimana component di-render ulang karena perubahan props dan state.)
3.	Unmounting  (Fase dimana sebuah component dihapus dari DOM.)
Pada setiap fase, React akan mengeksekusi beberapa built-in method secara berurutan yang disebut lifecycle method.

•	CONDITION AND LIST

-Render Bersyarat pada React berfungsi sama halnya dengan operator bersyarat pada Javascript. Gunakan JavaScript operator seperti if atau operator bersyarat untuk membuat representasi elemen dari state saat ini, dan React akan memperbarui UI sesuai dengan state tersebut.

-Render List
Kita dapat membangun koleksi dari beberapa elemen dan menyertakanya dalam jsx menggunakan tanda kurung kurawal {}.
