"use client";

const legalBlocks = [
  "Global Markets Group Limited, a company registered in England & Wales under company number 09493910, is authorised and regulated by the Financial Conduct Authority with reference number 744501. Its registered address is Green Park House, 15 Stratton Street, London W1J 8LQ, United Kingdom. You can contact us at support@gmgmarkets.co.uk or +44 203 865 3306",
  "HIGH RISK INVESTMENT WARNING: CFDs and Spreadbets are complex instruments and come with a high risk of losing money rapidly due to leverage. 56.0% of retail investor accounts lose money when trading in CFDs and Spreadbets with this provider. You should consider whether you understand how CFDs and Spreadbets work and whether you can afford to take the high risk of losing your money. CFDs and Spreadbets are provided by Global Markets Group Limited on an execution-only basis; we do not provide any advice and any written or verbal communication with us should not be considered as such.",
  "All news, research, analysis, or other information is provided as general market commentary and not as investment advice and all potential results discussed are not guaranteed to be achieved. The information is derived from publicly available sources, research or surveys. Past performance is not indicative of future performance.",
  "The information on this website is not directed at residents of the United States, Japan, Canada, Belgium or any other jurisdiction, where such distribution or use may be contrary to local laws or regulation. You must be of minimum legal age as determined by your country of origin to use services on this website.",
];

function SocialIcon({ label, children, link }) {
  return (
    <a
      href={link}
      aria-label={label}
      className="grid h-9 w-9 p-2 place-items-center rounded-md border border-white bg-white/5 text-white/90 hover:bg-white/10 transition"
    >
      {children}
    </a>
  );
}

function PayBadge({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-1 md:gap-2 shrink-0 ${className}`}>
      {children}
    </div>
  );
}

export default function LegalFooterSection() {
  return (
    <footer className="w-full bg-[#215C9E] text-white/90">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-12">
        {/* Top row: social + payment */}
        <div className="flex md:gap-6 gap-4  sm:items-center justify-between">
          <div className="flex items-center gap-3">
            <SocialIcon label="Facebook" link="https://www.facebook.com/GMGMarkets/?locale=fo_FO">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M25 12.5C25 5.6 19.4 0 12.5 0C5.6 0 0 5.6 0 12.5C0 18.55 4.3 23.5875 10 24.75V16.25H7.5V12.5H10V9.375C10 6.9625 11.9625 5 14.375 5H17.5V8.75H15C14.3125 8.75 13.75 9.3125 13.75 10V12.5H17.5V16.25H13.75V24.9375C20.0625 24.3125 25 18.9875 25 12.5Z" fill="white" />
              </svg>
            </SocialIcon>
            <SocialIcon label="LinkedIn" link="https://uk.linkedin.com/company/global-markets-group">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M19.3333 0C19.9743 0 20.589 0.254612 21.0422 0.707825C21.4954 1.16104 21.75 1.77573 21.75 2.41667V19.3333C21.75 19.9743 21.4954 20.589 21.0422 21.0422C20.589 21.4954 19.9743 21.75 19.3333 21.75H2.41667C1.77573 21.75 1.16104 21.4954 0.707825 21.0422C0.254612 20.589 0 19.9743 0 19.3333V2.41667C0 1.77573 0.254612 1.16104 0.707825 0.707825C1.16104 0.254612 1.77573 0 2.41667 0H19.3333ZM18.7292 18.7292V12.325C18.7292 11.2803 18.3141 10.2783 17.5754 9.53959C16.8367 8.80085 15.8347 8.38583 14.79 8.38583C13.7629 8.38583 12.5667 9.01417 11.9867 9.95667V8.61542H8.61542V18.7292H11.9867V12.7721C11.9867 11.8417 12.7358 11.0804 13.6663 11.0804C14.1149 11.0804 14.5452 11.2586 14.8624 11.5759C15.1797 11.8931 15.3579 12.3234 15.3579 12.7721V18.7292H18.7292ZM4.68833 6.71833C5.22672 6.71833 5.74306 6.50446 6.12376 6.12376C6.50446 5.74306 6.71833 5.22672 6.71833 4.68833C6.71833 3.56458 5.81208 2.64625 4.68833 2.64625C4.14674 2.64625 3.62733 2.8614 3.24436 3.24436C2.8614 3.62733 2.64625 4.14674 2.64625 4.68833C2.64625 5.81208 3.56458 6.71833 4.68833 6.71833ZM6.36792 18.7292V8.61542H3.02083V18.7292H6.36792Z" fill="white" />
              </svg>
            </SocialIcon>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 text-white/85">
            <PayBadge className="scale-75 sm:scale-90 md:scale-100 origin-center">
              <svg className="w-14 h-4 md:w-[67px] md:h-5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67 20" fill="none">
                <path d="M48.7006 0.81838C47.6202 0.421425 45.9369 0 43.8431 0C38.4831 0 34.7004 2.63187 34.6725 6.40294C34.639 9.17618 37.3637 10.7368 39.4211 11.6667C41.5344 12.6183 42.2407 13.2164 42.2351 14.0729C42.2212 15.3698 40.5462 15.957 38.9912 15.957C36.8528 15.957 35.6803 15.6661 33.8797 14.9375L33.2125 14.6357L32.4559 18.9804C33.7568 19.5106 36.1018 19.9647 38.5278 20C44.2256 20 47.9497 17.3872 47.9943 13.3687C48.039 11.1582 46.5706 9.4807 43.469 8.09951C41.5875 7.20228 40.415 6.60141 40.415 5.69059C40.415 4.88581 41.4172 4.02665 43.5109 4.02665C44.9033 3.99413 46.2872 4.24701 47.5728 4.7689L48.0753 4.98912L48.8318 0.791191L48.7006 0.81838ZM62.6115 0.356172H58.424C57.1203 0.356172 56.146 0.701468 55.5737 1.96302L47.5197 19.7281H53.2175L54.3565 16.8189L61.3078 16.8244C61.4781 17.5041 61.9778 19.7281 61.9778 19.7281H67L62.6115 0.356172ZM26.9675 0.19304H32.3917L28.9998 19.5759H23.5728L26.9675 0.187602V0.19304ZM13.1795 10.8755L13.7434 13.5672L19.0503 0.356172H24.7984L16.2531 19.7009H10.519L5.829 3.31702C5.73129 3.03698 5.61125 2.84666 5.3265 2.67265C3.63969 1.81931 1.85046 1.1736 0 0.750408L0.0697917 0.342578H8.8105C9.99417 0.386079 10.9489 0.750408 11.2755 1.98477L13.1795 10.8836V10.8755ZM55.9143 12.8521L58.0778 7.43067C58.0499 7.48505 58.5245 6.31049 58.7981 5.58184L59.1694 7.25394L60.4228 12.8467H55.9143V12.8521Z" fill="white" />
                <path d="M0.0700496 0.326264C2.92584 0.327253 5.78061 0.325276 8.6364 0.327253C9.23335 0.324287 9.84755 0.448868 10.3491 0.775151C10.8323 1.10242 11.0952 1.65216 11.2039 2.2019C11.7988 5.03167 12.4191 7.85748 13.0089 10.6882C12.3521 9.19821 11.5166 7.77047 10.4008 6.55927C9.05279 5.04808 7.4374 3.78458 5.63138 2.82876C3.87202 1.86276 1.95631 1.19339 0 0.720771V0.68221L0.0700496 0.326264Z" fill="#FAA61A" />
              </svg>
            </PayBadge>
            <PayBadge className="scale-75 sm:scale-90 md:scale-100 origin-center">
              <div className="flex items-center gap-1 md:gap-2">
                <svg className="w-7 h-4 md:w-[33px] md:h-5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 20" fill="none">
                  <path d="M11.286 2.16772H20.8395V17.8165H11.286V2.16772Z" fill="#FF5F00" />
                  <path d="M12.573 10.0316C12.573 6.85127 14.0745 4.03481 16.5 2.16772C14.751 0.854431 12.573 0 10.2135 0C4.5375 0.0632911 0 4.50949 0 10.0316C0 15.5538 4.5375 20 10.2135 20C12.573 20 14.751 19.2247 16.5 17.8323C14.1405 16.0285 12.573 13.212 12.573 10.0316Z" fill="#EB001B" />
                  <path d="M33 10.0633C33 15.5696 28.4625 20 22.7865 20C20.427 20 18.249 19.2247 16.5 17.8481C18.8595 16.0601 20.427 13.1804 20.427 10.0158C20.427 6.85127 18.9255 4.03481 16.5 2.18354C18.249 0.870253 20.427 0.0316457 22.7865 0.0316457C28.4625 0.126582 33 4.55696 33 10.0633ZM32.01 16.2184V15.9177H32.142V15.8544H31.8285V15.9177H31.9605V16.2184H32.01ZM32.6865 16.2184V15.8544H32.5545L32.4225 16.1551L32.2905 15.8544H32.1585V16.2184H32.2245V15.9177L32.3565 16.1551H32.4225L32.5545 15.9177V16.2184H32.6865Z" fill="#F79E1B" />
                </svg>
                <p className="text-[9px] hidden sm:block md:text-[12px] font-[400]">Mastercard</p>
              </div>
            </PayBadge>
            <PayBadge className="scale-75 sm:scale-90 md:scale-100 origin-center">
              <div className="flex items-center gap-1 md:gap-2">
                <svg className="w-5 h-[18px] md:w-5 md:h-[21px] shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" fill="none">
                  <path d="M9.28143 10.041L0.0601363 19.2787C0.359181 20.2541 1.31741 21 2.45509 21C2.93413 21 3.35331 20.8853 3.71249 20.6557L14.1316 14.9754L9.28143 10.041Z" fill="#EA4335" />
                  <path d="M18.6229 8.43439L14.1317 5.96715L9.10184 10.2131L14.1917 14.9754L18.6827 12.5656C19.4611 12.164 20 11.3607 20 10.5C19.9401 9.63939 19.4014 8.83601 18.6227 8.43439H18.6229Z" fill="#FBBC04" />
                  <path d="M0.0599999 1.72134C4.55162e-08 1.89341 0 2.12297 0 2.35239V18.7048C0 18.9345 4.55162e-08 19.1065 0.0599999 19.3361L9.64089 10.3279L0.0599999 1.72134Z" fill="#4285F4" />
                  <path d="M9.34143 10.5L14.1319 5.96715L3.77236 0.344269C3.41331 0.114713 2.93427 0 2.45522 0C1.31741 0 0.299454 0.745894 0.0599999 1.72134L9.34143 10.5Z" fill="#34A853" />
                </svg>
                <div className="hidden sm:block">
                  <p className="text-[5px] md:text-[6px] font-[400]">Get it On</p>
                  <p className="text-[8px] md:text-[10px] font-[400]">Google Pay</p>
                </div>
              </div>
            </PayBadge>
            <PayBadge className="scale-75 sm:scale-90 md:scale-100 origin-center">
              <svg className="w-7 h-4 md:w-[34px] md:h-[21px] shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 21" fill="none">
                <path d="M30.5228 0H3.47719C2.55498 0 1.67055 0.355592 1.01845 0.98855C0.366346 1.62151 0 2.47998 0 3.37512V17.6249C0 18.52 0.366346 19.3785 1.01845 20.0114C1.67055 20.6444 2.55498 21 3.47719 21H30.5228C31.445 21 32.3295 20.6444 32.9816 20.0114C33.6337 19.3785 34 18.52 34 17.6249V3.37512C34 2.47998 33.6337 1.62151 32.9816 0.98855C32.3295 0.355592 31.445 0 30.5228 0ZM3.47719 1.12504H30.5228C31.1376 1.12504 31.7272 1.3621 32.162 1.78407C32.5967 2.20605 32.8409 2.77836 32.8409 3.37512V17.6249C32.8409 18.2216 32.5967 18.794 32.162 19.2159C31.7272 19.6379 31.1376 19.875 30.5228 19.875H3.47719C2.86239 19.875 2.27276 19.6379 1.83803 19.2159C1.4033 18.794 1.15906 18.2216 1.15906 17.6249V3.37512C1.15906 2.77836 1.4033 2.20605 1.83803 1.78407C2.27276 1.3621 2.86239 1.12504 3.47719 1.12504Z" fill="white" />
                <path d="M9.4429 5.6252C9.49622 6.12472 9.29222 6.61524 8.99086 6.97862C8.68023 7.33301 8.18763 7.61427 7.69503 7.57264C7.63012 7.09338 7.877 6.58261 8.15518 6.27097C8.46581 5.90646 9.00245 5.64658 9.44174 5.6252H9.4429ZM8.28383 7.91466C8.60489 7.7909 9.0013 7.64015 9.4371 7.66602C9.71528 7.68627 10.5162 7.76953 11.0297 8.50643C11.0244 8.51034 11.019 8.51409 11.0134 8.51768C10.8813 8.60093 10.0792 9.11057 10.0897 10.1152C10.0989 11.3134 11.1062 11.7623 11.2394 11.8219L11.2545 11.8298C11.2533 11.8328 11.2521 11.8358 11.251 11.8388C11.2255 11.9198 11.0517 12.4621 10.6564 13.0235C10.2925 13.5432 9.91812 14.0518 9.31888 14.0619C9.03723 14.0675 8.84714 13.9876 8.64894 13.9055C8.44147 13.8189 8.22588 13.73 7.88628 13.73C7.5316 13.73 7.30443 13.8222 7.08652 13.9111C6.89875 13.9887 6.71678 14.063 6.4641 14.072C5.88689 14.0934 5.44876 13.5207 5.08482 13.0032C4.33722 11.9536 3.77044 10.0444 4.54006 8.75506C4.71847 8.44201 4.97815 8.1797 5.29331 7.99418C5.60847 7.80866 5.96814 7.70639 6.33661 7.69752C6.65883 7.69077 6.96598 7.81003 7.23488 7.91128C7.44004 7.99004 7.62085 8.05979 7.76921 8.05979C7.90366 8.05979 8.07868 7.99229 8.28499 7.91353L8.28383 7.91466ZM18.3097 8.63356C18.3097 7.117 17.226 6.07522 15.6694 6.07522H12.6605V13.865H13.9065V11.2031H15.63C17.204 11.2031 18.3109 10.1569 18.3109 8.63356H18.3097ZM15.3344 10.1895H13.9053V7.09563H15.3402C16.4181 7.09563 17.0359 7.65815 17.0359 8.64031C17.0359 9.62247 16.4193 10.1895 15.3344 10.1895ZM20.8156 10.7149C19.4248 10.7903 18.6412 11.4012 18.6412 12.3934C18.6412 13.4139 19.4422 14.1046 20.5885 14.1046C21.3558 14.1046 22.0952 13.7052 22.4337 13.0741H22.4615V14.0079H23.6125V10.0939C23.6125 8.95532 22.7061 8.22629 21.2885 8.22629C19.842 8.22629 18.9414 8.98232 18.8754 10.0084H20.0089C20.1144 9.50096 20.5491 9.17583 21.2445 9.17583C21.9782 9.17583 22.4175 9.55497 22.4175 10.1861V10.6238L20.8156 10.7149ZM22.4175 11.4338V11.8815C22.4175 12.6207 21.7614 13.1821 20.9223 13.1821C20.2767 13.1821 19.8536 12.8581 19.8536 12.3619C19.8536 11.8759 20.2593 11.5688 20.9779 11.5193L22.4175 11.4338Z" fill="white" />
                <path d="M24.7008 16.0971V15.152C24.7901 15.1734 24.9906 15.1734 25.0903 15.1734C25.6466 15.1734 25.9468 14.9473 26.13 14.3634C26.13 14.3521 26.2354 14.018 26.2354 14.0135L24.1225 8.32867H25.4241L26.903 12.9492H26.9262L28.4052 8.32867H29.6721L27.4814 14.3049C26.9807 15.6808 26.4035 16.1241 25.19 16.1241C25.0265 16.1234 24.8633 16.1144 24.7008 16.0971Z" fill="white" />
              </svg>
            </PayBadge>
          </div>
        </div>

        {/* Divider */}
        <div className="md:mt-8 mt-6 border-t border-white/15" />

        {/* Legal copy */}
        <div className="md:mt-8 mt-6 space-y-6">
          {legalBlocks.map((p, idx) => (
            <p
              key={idx}
              className="text-xs md:text-sm leading-[1.5] text-white"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Bottom line */}
        <div className="md:mt-8 mt-6 text-sm md:text-base text-white">
          {new Date().getFullYear()} Global Markets Group Limited | All rights reserved.
        </div>
      </div>
    </footer>
  );
}

