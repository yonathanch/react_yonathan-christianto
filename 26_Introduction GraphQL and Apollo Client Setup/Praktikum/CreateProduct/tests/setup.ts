import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

afterEach(() => {
  cleanup();
});



// Konfigurasi Vitest dengan React Testing Library

// 1.Buat aplikasi Bereaksi baru dengan Vite:
  // yarn create vite

// 2.Instal dependensi
  // yarn

// 3.Instal dependensi yang diperlukan
  // yarn add -D vitest jsdom @testing-library/react @testing-library/jest-dom

// 4.Tambahkan testskrip
// Di package.jsonfile Anda, tambahkan baris berikut di bawah scriptsatribut:
  // "scripts": {
  //   "test": "vitest"
  // }

// 5.Buat file pengujian penyiapan
// Buat file baru di bawah tests/setup.tsdengan konten berikut:
  // import { expect, afterEach } from 'vitest';
  // import { cleanup } from '@testing-library/react';
  // import matchers from '@testing-library/jest-dom/matchers';

  // expect.extend(matchers);

  // afterEach(() => {
  //   cleanup();
  // });


// 6.Konfigurasi vite untuk menggunakan pengaturan ini
//   Edit file vite.config.jsdi folder root:
  //   plugins: [react()],
  //   test: {
  //     environment: 'jsdom',
  //     setupFiles: ['./tests/setup.ts'],
  //     testMatch: ['./tests/**/*.test.tsx'],
  //     globals: true
  //   }

// Itu semua konfigurasi yang diperlukan.
// Sekarang, mari lanjutkan dan buat tes cepat untuk mencobanya



/*  lebih jelas nya ada di Link : https://dev.to/pacheco/configure-vitest-with-react-testing-library-5cbb */