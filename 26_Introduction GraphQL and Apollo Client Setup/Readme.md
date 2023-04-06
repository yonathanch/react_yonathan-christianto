                                                  26_Introduction GraphQL and Apollo Client Setup

•	GraphQL API dikembangkan oleh Facebook, dengan tujuan untuk mendapatkan sebuah API yang lebih fleksibel dan efisien. Pendekatan ini dapat menyelesaikan permasalahan yang ada sekarang dan juga permasalahan yang dihadapi pengembang pada saat mengembangkan API dengan menggunakan pendekatan REST API. Meskipun demikian, mengembangkan sebuah API dengan pendekatan GraphQL API juga menambah daftar tantangan baru yang harus diselesaikan oleh para developer.

•	Hasura dan Heroku
1.  Hasura adalah sebuah platform open-source yang menyediakan layanan pengelolaan dan otomatisasi backend untuk memudahkan pengembangan aplikasi web. Hasura menggunakan GraphQL API yang memungkinkan pengembang untuk membangun aplikasi web dengan cepat dan efisien.
2.  Heroku, di sisi lain, adalah platform cloud computing yang menyediakan lingkungan runtime untuk menjalankan aplikasi web. Heroku menyediakan infrastruktur dan layanan yang dibutuhkan untuk menjalankan aplikasi web, termasuk database, penyimpanan data, dan manajemen layanan.

Dalam konteks pengembangan aplikasi web dengan menggunakan Hasura dan Heroku, pengembang dapat menggunakan Hasura untuk mengelola backend dan membuat GraphQL API, sementara Heroku digunakan untuk menampung aplikasi web dan menjalankan layanan yang dibutuhkan oleh aplikasi tersebut.

•	Apollo Client Setup
1.	Go to src folder (npm i @apollo/client) and (npm i graphql)
2.	Create apollo-client.js file inside folder
3.	Create apolloClient and Export
4.	Setting apollo provider, in indeks.js import ApolloProvider and apollo-client
