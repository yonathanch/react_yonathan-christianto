                                                                    28_Subscription

•	Subscription pada GraphQL adalah fitur yang memungkinkan client untuk melakukan langganan (subscribe) terhadap suatu data yang terdapat pada server, dan menerima notifikasi secara real-time ketika terjadi perubahan pada data tersebut. Dalam Subscription, client akan terus menerima data baru dari server ketika terdapat perubahan pada data yang dilanggannya, tanpa perlu melakukan polling secara periodik.

•	Berikut adalah konsep-konsep kunci dalam GraphQL subscription:
1.	Tipe Subscription: Tipe Subscription mendefinisikan struktur permintaan subscription dan data yang akan dikembalikan oleh server ketika terjadi pembaruan pada subscription.
2.	Resolver Subscription: Resolver subscription bertanggung jawab untuk mengembalikan data ketika terjadi pembaruan pada subscription. Ini mirip dengan resolver permintaan (query resolver), namun daripada mengembalikan data sekali, resolver ini menjaga koneksi terbuka dan mengembalikan data setiap kali terjadi pembaruan.
3.	Payload Subscription: Payload subscription adalah data yang dikirimkan ke klien setiap kali terjadi pembaruan pada subscription.

•	Konsep-konsep dasar dalam GraphQL subscription
1.	Subscription Variables: Seperti pada permintaan query dan mutation, Anda juga dapat menggunakan variabel dalam operasi subscription untuk mengirimkan nilai yang dinamis ke permintaan subscription.
2.	Subscription Transport: Transport adalah cara bagaimana klien dan server mengirimkan permintaan dan respons. Dalam GraphQL subscription, transport yang umum digunakan adalah WebSocket.
3.	Subscription Lifecycle: Subscription memiliki siklus hidup yang berbeda dengan query dan mutation. Setelah melakukan subscribe, koneksi tetap terbuka hingga unsubscribe atau terjadi kesalahan.
4.	Subscription Implementations: Ada berbagai implementasi GraphQL subscription, termasuk menggunakan GraphQL-JS, Apollo Server, dan Prisma.
