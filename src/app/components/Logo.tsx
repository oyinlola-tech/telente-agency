import { appConfig } from "../config/appConfig";

export function Logo() {
  return (
    <div className="inline-flex items-center gap-3" data-name="Logo">
      <div className="h-10 w-10 rounded-[14px] bg-[#0f0f0f] grid place-items-center shadow-[0_8px_20px_rgba(206,125,99,0.35)]">
        <img
          src="/Telente-transparent-logo.png"
          alt=""
          className="h-7 w-7 object-contain"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-[var(--text-primary)] font-['Roboto_Flex:SemiBold',sans-serif] uppercase tracking-[0.12em]">
          Telente
        </span>
        <span className="text-xs text-[var(--text-secondary)] font-['Roboto_Mono:Medium',sans-serif] uppercase tracking-[0.2em]">
          Technologies
        </span>
      </div>
      <span className="sr-only">{appConfig.companyName}</span>
    </div>
  );
}
