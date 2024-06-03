/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4D455D",
        gris: "#CCCCCC",
        durazno: "#FFDCD0",
        rosaMexicano: "#E96479",
        rosaPastel: "#fccbef",
        rosaFuerte: "#f99cc6",
        fucsia: "#f368e0",
        verde: "#6ab04c",
        verdePastel: "#81b38b",
        azulPastel: "#7DB9B6",
        azulCielo: "#3BB8BC",
        azulMarino: "#0C4F75",
        bgClaro: "#F2F2F2",
        bgOscuro1: "#353b48",
        bgOscuro2: "#2f3640",
        bgAboutUs: "#f5f3ed",
        bgOscuro3: "#58687C",
        footer: "#1b1f28",
        rojoLogo: "#ed1a3b",
        verdeLogo: "#0db14c",
        amarilloLogo: "#fdb913",
        grisLogo: "#58595b",
      },
      backgroundImage: {
        banner: "url('./src/assets/image1.jpg')",
        aboutUs: "url('./src/assets/image3.jpg')",
        happyGirl: "url('https://lh3.googleusercontent.com/fife/ALs6j_FWVMcQgNjQn_EdwYOCG92n65ax0qLwZP80dqzt9xRCIu28gUpk9RH7gYkLvgbomS3I9-AYEk0zJ7D6zba-eZU8WfdAixuwbA5hhCKJKq8kwWhqo4_cMzoQHmWF211Sk-g_Mqc8N2RCg94nmL-QcStdn-3NE4KPIF45bDhmOOTHOecjqBiu-qP-zUiq_lG0n7jsv1QY2jZ3oZqAQBz3xzO5rfC_VYR3FzXvB7DMDYqgcD0IqaHFDno-NOWTvOAupKFGtyFpyXJ3Wgo9LhQeUng1a509p7i6BilehaESJVB8LqzB_oCVqVhf4AYUJPk0_HLW7gfI38v7z0zMoA852nvVFuIe1KUuD8XVuA9RjMtpShyxpv8iZ0YkE3xZPsYs7nFl8scjn8zEF6JQX0C84fGkNmchw8RgaL7pr_nN_k_k4veZPBFOThmevIUNCbZEUzILkNkAFMCtfLzfQ2cZUGgKclaVeway5t_LVakeKGbfrjQ5ry9M7-s2SXYVebVWavsHRUU3Low77q8dBkPM3LRr4B_o_RklaXYO3Y0I6u-XQ7XBy6XcF0F-tzouPe1-P71s2zsIR2BYuxU33wW5gJSId_Wg7giH77nhR1X4ZUOXoNI_fqAWEa0W3s9dq9jubm-C0MaH565LdbSnYCFZrzfzT99quKhDSeGy5ZcXX_AQe_7iIJCqTTKiJWK56K_OzT9Rp_23L46CNbVwpQaQI4Yq9IPvorHzFqEVxdr81pL0D7SRRJYP0Bt2vpEALvPMf4mca9GQBTzF4sE516sQNXQLQDa3hqiD0vN-fTAySVBd5Gm6iphtF1RvVZcU87ewRfemUgJVoU4v_ir1vnnmYK4R-KxkhKuK59vgt4lYGtAfvxzJw6air6vVfA7clXKelPCewzpOhbEpzrEvhQKtfBPOb75grc_mNby1RAgkhDARzU_YsJ9m2sN0325e6Crbf8mXM2bM1FdZBh4lAkKFdLp4oKAHU8nxa-UO5lNiUM_caDl1Eyket2TXvc9s_7QREL1hnTTp6nHnRqmfT72bGajQfa9P8u8J5QL8Fg1_DfB2Lw5ToVQHzfJRrdX1qgO_d5-UAOf6fWwJ2s3f-XW82fBMNnYMU24ksfRrEsBfYw2P6QYzhPLr9TmlBpKV84yIbxcJjqZ9VlN-JovQH73cbWOAxL60LNSlxQF_IpjT93WPgIr_U1V_IpEsiF3cCSYMG8CIvhVaHu6vdUyP0NrNtRat3I1POvvnXFDEfXxp-yyzCo8rVmdXI5_JOUABOlbQuWG9n5leEESSvcoUs4NhcwBpLIuGPIBnSPyZyPx2oIv-3bM7wI9O7de-BYDuaKduriqt1nxFAk5Iv6NGdYmjoH8W0uTf8nFe8WfE7vHmNK27AA0AZzxt8SGeA2VtVCEIunDf5jRdKcnWHM6F-cC3mwPUeeIU5vTEJphKuKgBKM0rs-PUnT6eqmhsjQOBSgp58PaUqkith28wEhZ_OpYULLiv4VuPncwUmV4XVnU0Ge4CFDOQ65wTNPhh5gTBK3JDFQfBooHzLZKwupNQqaxaCe-gYf13-v8dXroofyI8lW7hxa_XDIC1fq4xP8F7IsgaJWTWLKhm_qTID6vE15iASgIVI7U-o2H0rdkiCWHEygcYfiQXQFbJ6Ts')",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
  darkMode: "class",
}