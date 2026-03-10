import svgPaths from "./svg-iu1yr12d1w";
import imgImage from "figma:asset/c6312101b508e020b1af49fbf6d06ab49490206b.png";
import imgImage1 from "figma:asset/2011bcbaee24b0431327d9b378a71b4cc54cbe62.png";
import imgImage2 from "figma:asset/78b051ea5bfd363ab0a6dddf635877fcdde3673d.png";

function Logo() {
  return (
    <div className="h-[16px] relative shrink-0 w-[86.471px]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.4714 16">
        <g id="Logo">
          <path d={svgPaths.p3a54b480} fill="var(--fill-0, #F3DFD8)" id="Vector" />
          <path d={svgPaths.p23bc5800} fill="var(--fill-0, #F3DFD8)" id="Vector_2" />
          <path d={svgPaths.p37d3af00} fill="var(--fill-0, #F3DFD8)" id="Vector_3" />
          <path d={svgPaths.p11290bc0} fill="var(--fill-0, #F3DFD8)" id="Vector_4" />
          <path d={svgPaths.p3cd23ea0} fill="var(--fill-0, #F3DFD8)" id="Vector_5" />
          <path d={svgPaths.p14fe2700} fill="var(--fill-0, #F3DFD8)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p1a17e580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-center overflow-clip p-[10px] relative rounded-[10px] shrink-0" data-name="Button">
      <Icon />
    </div>
  );
}

function Navbar() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#1a1a1a] content-stretch flex items-center justify-between left-1/2 overflow-clip p-[14px] rounded-[10px] top-[41px] w-[358px]" data-name="Navbar">
      <Logo />
      <Button />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto_Flex:SemiBold',sans-serif] font-semibold gap-[4px] items-start justify-center leading-[1.5] not-italic relative shrink-0 text-[#f9efec] text-[24px] uppercase w-full" data-name="Container">
      <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Unlock Your Potential
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        in the Digital World
      </p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p18e73b00} id="Vector" stroke="var(--stroke-0, #0F0F0F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ce7d63] content-stretch flex gap-[10px] items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <Icon1 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+1px)] size-[56px] top-[calc(50%-0.5px)]" data-name="Shape">
        <div className="absolute inset-[0_11.69%_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49.4554 56">
            <path d={svgPaths.p28bfd280} fill="var(--fill-0, #CE7D63)" id="Shape" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] left-[49px] not-italic text-[#ce7d63] text-[20px] top-[4px] uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Start a Project
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center px-[24px] py-[30px] relative w-full">
          <Container2 />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[20px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        At NexGen
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        We believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. Join us to be part of a passionate and innovative team dedicated to crafting exceptional software solutions for clients across the globe. We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1973b080} id="Vector" stroke="var(--stroke-0, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[16px] uppercase whitespace-nowrap">Know More</p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col gap-[30px] items-start p-[24px] relative w-full">
        <TextContainer />
        <Container3 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-start left-1/2 top-[133px] w-[358px]" data-name="Container">
      <Container1 />
      <Card />
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative w-full">
          <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f9efec] text-[28px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Join Our Team at NexGen
          </p>
        </div>
      </div>
    </div>
  );
}

function BoldDesignToolsPipette() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Bold / Design, Tools / Pipette">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Bold / Design, Tools / Pipette">
          <g id="Vector">
            <path d={svgPaths.p1ff97f80} fill="var(--fill-0, #CE7D63)" />
            <path d={svgPaths.p27f83430} fill="var(--fill-0, #CE7D63)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[8px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <BoldDesignToolsPipette />
    </div>
  );
}

function SubContainer() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Sub Container">
      <IconContainer />
      <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px not-italic relative text-[#f9efec] text-[20px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Web Designer
      </p>
    </div>
  );
}

function SubContainer1() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative rounded-[45px] shrink-0" data-name="Sub Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Salary
      </p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #CE7D63)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#e6e6e6] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        $45,000 - $60,000 per year
      </p>
    </div>
  );
}

function SubContainer2() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative rounded-[45px] shrink-0" data-name="Sub Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Experience
      </p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #CE7D63)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#e6e6e6] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        1+ year
      </p>
    </div>
  );
}

function SubContainer3() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative rounded-[45px] shrink-0" data-name="Sub Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Deadline
      </p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #CE7D63)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#e6e6e6] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        30/09/2025
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer1 />
      <SubContainer2 />
      <SubContainer3 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[16px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Skills
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p19aaf200} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon3 />
    </div>
  );
}

function SubContainer4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Sub Container">
      <Button3 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[14px] uppercase whitespace-nowrap">View Details</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#ce7d63] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[14px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Apply NoW
          </p>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <SubContainer />
        <Container5 />
        <TextContainer2 />
        <SubContainer4 />
        <Button4 />
      </div>
    </div>
  );
}

function BoldElectronicDevicesSmartphone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Bold / Electronic, Devices / Smartphone 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Bold / Electronic, Devices / Smartphone 2">
          <path clipRule="evenodd" d={svgPaths.p19427cf0} fill="var(--fill-0, #CE7D63)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[16px] relative rounded-[8px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <BoldElectronicDevicesSmartphone />
    </div>
  );
}

function SubContainer5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full" data-name="Sub Container">
      <IconContainer1 />
      <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px not-italic relative text-[#f9efec] text-[20px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Mobile App Developer
      </p>
    </div>
  );
}

function SubContainer6() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative rounded-[45px] shrink-0" data-name="Sub Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Salary
      </p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #CE7D63)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#e6e6e6] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        $55,000 - $75,000 per year
      </p>
    </div>
  );
}

function SubContainer7() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative rounded-[45px] shrink-0" data-name="Sub Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Experience
      </p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #CE7D63)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#e6e6e6] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        2+ years
      </p>
    </div>
  );
}

function SubContainer8() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex gap-[6px] items-center px-[12px] py-[8px] relative rounded-[45px] shrink-0" data-name="Sub Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Deadline
      </p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #CE7D63)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#e6e6e6] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        15/10/2025
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer6 />
      <SubContainer7 />
      <SubContainer8 />
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[16px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Skills
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p19aaf200} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon4 />
    </div>
  );
}

function SubContainer9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Sub Container">
      <Button5 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[14px] uppercase whitespace-nowrap">View Details</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#ce7d63] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[14px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Apply NoW
          </p>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <SubContainer5 />
        <Container6 />
        <TextContainer3 />
        <SubContainer9 />
        <Button6 />
      </div>
    </div>
  );
}

function ItemsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Items Container">
      <Card1 />
      <Card2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1973b080} id="Vector" stroke="var(--stroke-0, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer2() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon5 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[20px] relative w-full">
          <IconContainer2 />
          <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[14px] uppercase whitespace-nowrap">View All</p>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-start left-1/2 p-[10px] rounded-[14px] top-[744px] w-[358px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <TextContainer1 />
      <ItemsContainer />
      <Button7 />
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative w-full">
          <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f9efec] text-[28px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Testimonials
          </p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] not-italic p-[24px] relative w-full">
        <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          NexGen turned our business around!
        </p>
        <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Their Quality Engineering strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
        </p>
      </div>
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f3dfd8] text-[16px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Sarah Thompson
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#81807e] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        CEO of BlueBloom
      </p>
    </div>
  );
}

function SubContainer10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[40px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#ce7d63] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgImage} />
        </div>
      </div>
      <TextContainer5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p18e73b00} id="Vector" stroke="var(--stroke-0, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon6 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[16px] relative w-full">
          <SubContainer10 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] not-italic p-[24px] relative w-full">
        <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          NexGen turned our business around!
        </p>
        <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Their Quality Engineering strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!
        </p>
      </div>
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f3dfd8] text-[16px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Wade Warren
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#81807e] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Art Director
      </p>
    </div>
  );
}

function SubContainer11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[40px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#ce7d63] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgImage1} />
        </div>
      </div>
      <TextContainer6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p18e73b00} id="Vector" stroke="var(--stroke-0, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon7 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[16px] relative w-full">
          <SubContainer11 />
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.5] not-italic p-[24px] relative w-full">
        <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Working with NexGen was a pleasure.
        </p>
        <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.`}</p>
      </div>
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-h-px min-w-px not-italic relative" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f3dfd8] text-[16px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Lisa Williams
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#81807e] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        CEO Of HealthTech
      </p>
    </div>
  );
}

function SubContainer12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[40px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#ce7d63] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgImage2} />
        </div>
      </div>
      <TextContainer7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p18e73b00} id="Vector" stroke="var(--stroke-0, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon8 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[16px] relative w-full">
          <SubContainer12 />
          <Button10 />
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <Container12 />
      <Container13 />
    </div>
  );
}

function ItemsContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Items Container">
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1973b080} id="Vector" stroke="var(--stroke-0, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon9 />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[20px] relative w-full">
          <IconContainer3 />
          <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[14px] uppercase whitespace-nowrap">ALL Testimonials</p>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bottom-[2710px] content-stretch flex flex-col gap-[10px] items-start left-[16px] p-[10px] rounded-[14px] w-[358px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <TextContainer4 />
      <ItemsContainer1 />
      <Button11 />
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative w-full">
          <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f9efec] text-[28px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Frequently Asked Questions
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2a6d02f0} fill="var(--fill-0, #E7BEB1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon10 />
    </div>
  );
}

function SubContainer13() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#f9efec] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        How long does it take to complete a web development project?
      </p>
      <Button12 />
    </div>
  );
}

function FaqItemOpen() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="FAQ Item Open">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[30px] relative w-full">
        <SubContainer13 />
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 298 1">
              <line id="Line" stroke="var(--stroke-0, #262626)" x2="298" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`The timeline varies depending on the project's complexity and requirements. Our team strives to deliver projects on time while maintaining the highest quality standards.`}</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p13533d00} fill="var(--fill-0, #E7BEB1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon11 />
    </div>
  );
}

function FaqItem() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="FAQ Item">
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[30px] py-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#f9efec] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Can you handle large-scale mobile app development projects?
          </p>
          <Button13 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p13533d00} fill="var(--fill-0, #E7BEB1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon12 />
    </div>
  );
}

function FaqItem1() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="FAQ Item">
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[30px] py-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#f9efec] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Can you integrate third-party APIs into our mobile app?
          </p>
          <Button14 />
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p13533d00} fill="var(--fill-0, #E7BEB1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon13 />
    </div>
  );
}

function FaqItem2() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="FAQ Item">
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[30px] py-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#f9efec] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            How do you ensure cross-platform compatibility for mobile apps?
          </p>
          <Button15 />
        </div>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p13533d00} fill="var(--fill-0, #E7BEB1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon14 />
    </div>
  );
}

function FaqItem3() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="FAQ Item">
      <div aria-hidden="true" className="absolute border border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center px-[30px] py-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#f9efec] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            What is your approach to user experience (UX) design?
          </p>
          <Button16 />
        </div>
      </div>
    </div>
  );
}

function ItemsContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Items Container">
      <FaqItemOpen />
      <FaqItem />
      <FaqItem1 />
      <FaqItem2 />
      <FaqItem3 />
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-[#0f0f0f] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#676665] text-[16px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Enter your name
          </p>
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#f3dfd8] text-[16px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Name
      </p>
      <InputField />
    </div>
  );
}

function InputField1() {
  return (
    <div className="bg-[#0f0f0f] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#676665] text-[16px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Enter your email
          </p>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#f3dfd8] text-[16px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Email
      </p>
      <InputField1 />
    </div>
  );
}

function InputField2() {
  return (
    <div className="bg-[#0f0f0f] h-[101px] relative rounded-[8px] shrink-0 w-full" data-name="Input Field">
      <div className="content-stretch flex items-start p-[16px] relative size-full">
        <p className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#676665] text-[16px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Enter Your Question Here .....
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#f3dfd8] text-[16px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Your Question
      </p>
      <InputField2 />
    </div>
  );
}

function FormElements() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Form Elements">
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#ce7d63] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[14px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Send Your Message
          </p>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shadow-[10px_10px_50px_0px_rgba(0,98,255,0.03)] shrink-0 w-full" data-name="Form">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center p-[30px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#f9efec] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Ask your question
          </p>
          <div className="h-0 relative shrink-0 w-full" data-name="Line">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 298 1">
                <line id="Line" stroke="var(--stroke-0, #262626)" x2="298" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <FormElements />
          <Button17 />
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bottom-[1304px] content-stretch flex flex-col gap-[10px] items-start left-[16px] w-[358px]" data-name="Container">
      <TextContainer8 />
      <ItemsContainer2 />
      <Form />
    </div>
  );
}

function TextContainer9() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#0f0f0f] text-[28px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Ready to Transform Your Digital Presence?
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#262626] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.
      </p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p29e5fd00} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#0f0f0f] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[14px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#f3dfd8] text-[14px] text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Get in Touch
          </p>
          <Icon15 />
        </div>
      </div>
    </div>
  );
}

function SubContainer14() {
  return (
    <div className="bg-[#ce7d63] relative rounded-[14px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-end p-[30px] relative w-full">
          <TextContainer9 />
          <Button18 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[14px] uppercase whitespace-nowrap">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[14px] uppercase whitespace-nowrap">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[14px] uppercase whitespace-nowrap">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[14px] uppercase whitespace-nowrap">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[14px] uppercase whitespace-nowrap">Follow Us on Social Media</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[14px] uppercase whitespace-nowrap">Follow Us on Social Media</p>
    </div>
  );
}

function SubContainer15() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[8px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[14px] relative w-full">
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute inset-[8.33%_8.31%]" data-name="Logo 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.3463 23.3333">
        <g id="Logo 2">
          <path d={svgPaths.p2f5d1880} fill="var(--fill-0, #CE7D63)" id="Vector" />
          <path d={svgPaths.p2f5d1880} fill="var(--fill-0, #CE7D63)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <Logo1 />
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="bg-[#1f1f1f] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[14px] relative w-full">
          <Icon16 />
        </div>
      </div>
    </div>
  );
}

function Elements() {
  return (
    <div className="absolute inset-[12.5%_4.51%]" data-name="ELEMENTS">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4751 20.9998">
        <g id="ELEMENTS">
          <path d={svgPaths.p1fb71e00} fill="var(--fill-0, #CE7D63)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Capa() {
  return (
    <div className="absolute contents inset-[12.5%_4.51%]" data-name="Capa 2">
      <Elements />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <Capa />
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="bg-[#1f1f1f] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[14px] relative w-full">
          <Icon17 />
        </div>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[4.17%_6.41%_4.17%_5.64%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6968 25.6667">
        <g id="Group 80">
          <path d={svgPaths.p37b8b700} fill="var(--fill-0, #E7BEB1)" id="Vector" />
          <path d={svgPaths.p1a13cd30} fill="var(--fill-0, #CE7D63)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[28px] relative shrink-0 w-[29.217px]" data-name="Icon">
      <div className="absolute inset-[0_0.46%_0.48%_4.17%]" data-name="Logo Container" />
      <Group1 />
    </div>
  );
}

function IconContainer6() {
  return (
    <div className="bg-[#1f1f1f] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[14px] relative w-full">
          <Icon18 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[20.83%_3.91%_21.56%_3.93%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.8053 16.1286">
        <g id="Group">
          <path d={svgPaths.p26e05800} fill="var(--fill-0, #D48E77)" id="Vector" />
          <path d={svgPaths.p388d7000} fill="var(--fill-0, #D48E77)" id="Vector_2" />
          <path d={svgPaths.p2008b300} fill="var(--fill-0, #D48E77)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <Group />
    </div>
  );
}

function IconContainer7() {
  return (
    <div className="bg-[#1f1f1f] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[14px] relative w-full">
          <Icon19 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <IconContainer4 />
      <IconContainer5 />
      <IconContainer6 />
      <IconContainer7 />
    </div>
  );
}

function LinksContainer() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto_Flex:Regular',sans-serif] font-normal gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[14px] w-full" data-name="Links Container">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Why Us
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        About Us
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Testimonials
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        FAQ’s
      </p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f3dfd8] text-[18px] w-full">Home</p>
      <LinksContainer />
    </div>
  );
}

function LinksContainer1() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto_Flex:Regular',sans-serif] font-normal gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[14px] w-full" data-name="Links Container">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Web Development
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        App Development
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Web Design
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Quality Engineering
      </p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f3dfd8] text-[18px] w-full">Services</p>
      <LinksContainer1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full">
      <Container22 />
      <Container23 />
    </div>
  );
}

function LinksContainer2() {
  return (
    <div className="content-stretch flex flex-col font-['Roboto_Flex:Regular',sans-serif] font-normal gap-[10px] items-start leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[14px] w-full" data-name="Links Container">
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Klothink
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Zenith
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Novus
      </p>
      <p className="relative shrink-0 w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Apex
      </p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f3dfd8] text-[18px] w-full">Projects</p>
      <LinksContainer2 />
    </div>
  );
}

function SubContainer18() {
  return (
    <div className="bg-[#262626] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Sub Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ccc] text-[12px] tracking-[-0.36px] whitespace-nowrap">Soon</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Design
      </p>
      <SubContainer18 />
    </div>
  );
}

function SubContainer19() {
  return (
    <div className="bg-[#262626] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Sub Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ccc] text-[12px] tracking-[-0.36px] whitespace-nowrap">Soon</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Development
      </p>
      <SubContainer19 />
    </div>
  );
}

function LinksContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Links Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Business
      </p>
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f3dfd8] text-[18px] w-full">Blogs</p>
      <LinksContainer3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[30px] items-start relative shrink-0 w-full">
      <Container24 />
      <Container25 />
    </div>
  );
}

function SubContainer17() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Sub Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-start p-[24px] relative w-full">
          <Frame />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function TextContainer10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[1.5] relative shrink-0 uppercase w-full" data-name="Text Container">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal relative shrink-0 text-[#676665] text-[14px] w-full">Newsletter</p>
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium not-italic relative shrink-0 text-[#f9efec] text-[20px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Subscribe To our Newsletter
      </p>
    </div>
  );
}

function InputField3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Input Field">
      <div aria-hidden="true" className="absolute border-[#333] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[14px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#676665] text-[14px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Enter your email
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path clipRule="evenodd" d={svgPaths.p19aaf200} fill="var(--fill-0, #E7BEB1)" fillRule="evenodd" id="Vector 431 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon20 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative rounded-[10px] shrink-0 w-[316px]" data-name="Container">
      <InputField3 />
      <Button19 />
    </div>
  );
}

function SubContainer20() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-end p-[24px] relative w-full">
          <TextContainer10 />
          <Container28 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[14px] whitespace-nowrap">{`Terms & Conditions`}</p>
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 309 1">
            <line id="Line" stroke="var(--stroke-0, #232329)" x2="309" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[14px] whitespace-nowrap">Privacy Policy</p>
    </div>
  );
}

function SubContainer21() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Sub Container">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative w-full">
        <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[14px] whitespace-nowrap">© 2024 Telente Technologies. All rights reserved.</p>
        <Container29 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer17 />
      <SubContainer20 />
      <SubContainer21 />
    </div>
  );
}

function SubContainer16() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container18() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col gap-[10px] items-center left-[calc(50%+0.5px)] pb-[20px] w-[357px]" data-name="Container">
      <SubContainer14 />
      <SubContainer15 />
      <SubContainer16 />
    </div>
  );
}

function TextContainer11() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative w-full">
          <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f9efec] text-[28px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            How to Apply
          </p>
        </div>
      </div>
    </div>
  );
}

function TextContainer12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#81807e] text-[14px]">Step 01</p>
        </div>
      </div>
    </div>
  );
}

function TextContainer13() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Text Container">
      <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t-2 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px not-italic relative text-[#f9efec] text-[18px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Explore Job Listings
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1973b080} id="Vector" stroke="var(--stroke-0, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon21 />
    </div>
  );
}

function SubContainer22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Sub Container">
      <Button20 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[16px] uppercase whitespace-nowrap">Know More</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t-2 inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
        <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#b3b3b2] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          {`Visit our website's "Careers" page to explore the current job listings. Review the various roles available and select the position that aligns with your skills, experience, and career aspirations.`}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <SubContainer22 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <TextContainer12 />
      <TextContainer13 />
      <Container31 />
    </div>
  );
}

function TextContainer14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#81807e] text-[14px]">Step 02</p>
        </div>
      </div>
    </div>
  );
}

function TextContainer15() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Text Container">
      <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t-2 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px not-italic relative text-[#f9efec] text-[18px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Review Job Description
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1973b080} id="Vector" stroke="var(--stroke-0, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon22 />
    </div>
  );
}

function SubContainer23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Sub Container">
      <Button21 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[16px] uppercase whitespace-nowrap">Know More</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t-2 inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
        <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#b3b3b2] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Click on the desired job title to view the detailed job description. Take your time to read through the responsibilities, requirements, and qualifications to ensure you have a clear understanding of the role.
        </p>
        <SubContainer23 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <TextContainer14 />
      <TextContainer15 />
      <Container32 />
    </div>
  );
}

function TextContainer16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#81807e] text-[14px]">Step 03</p>
        </div>
      </div>
    </div>
  );
}

function TextContainer17() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Text Container">
      <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t-2 inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px not-italic relative text-[#f9efec] text-[18px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Prepare Your Application
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1973b080} id="Vector" stroke="var(--stroke-0, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon23 />
    </div>
  );
}

function SubContainer24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Sub Container">
      <Button22 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[16px] uppercase whitespace-nowrap">Know More</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#262626] border-solid border-t-2 inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
        <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#b3b3b2] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          Before applying, ensure you have the following ready
        </p>
        <SubContainer24 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-start overflow-clip relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <TextContainer16 />
      <TextContainer17 />
      <Container33 />
    </div>
  );
}

function ItemsContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Items Container">
      <Card6 />
      <Card7 />
      <Card8 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1973b080} id="Vector" stroke="var(--stroke-0, #E7BEB1)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer8() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon24 />
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[20px] relative w-full">
          <IconContainer8 />
          <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[14px] uppercase whitespace-nowrap">ALL Steps</p>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-start left-1/2 p-[10px] rounded-[16px] top-[2138px] w-[358px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <TextContainer11 />
      <ItemsContainer3 />
      <Button23 />
    </div>
  );
}

export default function CareersPageMobile() {
  return (
    <div className="bg-[#0f0f0f] relative size-full" data-name="Careers Page - Mobile">
      <Navbar />
      <Container />
      <Container4 />
      <Container7 />
      <Container14 />
      <Container18 />
      <Container30 />
    </div>
  );
}


