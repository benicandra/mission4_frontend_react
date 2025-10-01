import FooterAccordion from "./accordion/FooterAccordion";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 gap-[20px] py-12 px-4 md:px-[120px]">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="flex flex-col space-y-4 md:w-1/2">
          <div className="logo">
            <img
              src="/Logo.png"
              alt="Videobelajar Logo"
              className="h-6 md:h-8"
            />
          </div>
          <p className="text-gray-800 text-lg font-medium leading-relaxed">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </p>
          <p className="text-gray-600">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
          </p>
          <p className="text-gray-600">+62-877-7123-1234</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8 md:mt-0 md:w-1/2">
          <FooterAccordion
            title="Kategori"
            links={[
              "Digital & Teknologi",
              "Pemasaran",
              "Manajemen Bisnis",
              "Pengembangan Diri",
              "Desain",
            ]}
          />
          <FooterAccordion
            title="Perusahaan"
            links={[
              "Tentang Kami",
              "FAQ",
              "Kebijakan Privasi",
              "Ketentuan Layanan",
              "Bantuan",
            ]}
          />
          <FooterAccordion title="Komunitas" links={["Tips Sukses", "Blog"]} />
        </div>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      <div className="flex flex-col-reverse md:flex-row justify-start md:justify-between md:items-center gap-6 ">
        <p className="text-gray-600 text-md">
          @2023 Gerobak Sayur All Rights Reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition duration-200"
          >
            <img src="/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition duration-200"
          >
            <img src="/facebooklogo.png" alt="Facebook" className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition duration-200"
          >
            <img src="/instagramlogo.png" alt="Instagram" className="h-6 w-6" />
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 transition duration-200"
          >
            <img src="/twitterlogo.png" alt="Twitter" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
