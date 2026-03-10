import svgPaths from "../../imports/svg-o2qg4vmwj9";
import { useTheme } from "../contexts/ThemeContext";
import { appConfig } from "../config/appConfig";

export function Logo() {
  const { theme } = useTheme();
  const fillColor = theme === 'dark' ? '#F3DFD8' : '#0f0f0f';
  
  return (
    <div className="h-[24px] relative shrink-0 w-[129.707px]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 129.707 24">
        <g id="Logo">
          <path d={svgPaths.p11410700} fill={fillColor} id="Vector" />
          <path d={svgPaths.p2003f280} fill={fillColor} id="Vector_2" />
          <path d={svgPaths.p96abd00} fill={fillColor} id="Vector_3" />
          <path d={svgPaths.p2968ea00} fill={fillColor} id="Vector_4" />
          <path d={svgPaths.pc70c9f2} fill={fillColor} id="Vector_5" />
          <path d={svgPaths.p2c86a580} fill={fillColor} id="Vector_6" />
        </g>
      </svg>
      <span className="sr-only">{appConfig.companyName}</span>
    </div>
  );
}
