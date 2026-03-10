import svgPaths from "./svg-td1muq3thj";
import imgImage from "figma:asset/8410421760a1d164d08527cf8780ec84c55aa884.png";
import imgImage1 from "figma:asset/9333dbfd96156981d7444169ea92aa972ca6be65.png";
import imgImage2 from "figma:asset/c6312101b508e020b1af49fbf6d06ab49490206b.png";
import imgImage3 from "figma:asset/2011bcbaee24b0431327d9b378a71b4cc54cbe62.png";
import imgImage4 from "figma:asset/78b051ea5bfd363ab0a6dddf635877fcdde3673d.png";

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
    <div className="content-stretch flex flex-col font-['Roboto_Flex:SemiBold',sans-serif] font-semibold gap-[4px] items-start justify-center leading-[1.5] not-italic relative shrink-0 text-[#f9efec] text-[28px] uppercase w-full" data-name="Container">
      <p className="relative shrink-0 whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        software solutions
      </p>
      <p className="min-w-full relative shrink-0 w-[min-content]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        That Drive Success
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

function SubContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-end relative shrink-0 w-full" data-name="Sub Container">
      <Container2 />
      <Button1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[14px] uppercase whitespace-nowrap">Quality Engineering</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[14px] uppercase whitespace-nowrap">Website Design</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[14px] uppercase whitespace-nowrap">Branding</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[14px] uppercase whitespace-nowrap">Website Development</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[14px] uppercase whitespace-nowrap">Mobile App Development</p>
      <div className="relative shrink-0 size-[7px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <circle cx="3.5" cy="3.5" fill="var(--fill-0, #CE7D63)" id="Shape" r="3.5" />
        </svg>
      </div>
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#676665] text-[14px] uppercase whitespace-nowrap">Quality Engineering</p>
    </div>
  );
}

function SubContainer1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#0f0f0f] bottom-[16px] content-stretch flex flex-col items-center justify-center left-[calc(50%+0.5px)] overflow-clip p-[14px] rounded-[8px] w-[325px]" data-name="Sub Container">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center pb-[96px] pt-[30px] px-[24px] relative w-full">
          <SubContainer />
          <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#676665] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            At NexGen, we believe in the transformative power of software solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced software landscape.
          </p>
          <SubContainer1 />
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Text Container">
      <div className="content-stretch flex flex-col gap-[10px] items-start leading-[1.5] px-[14px] py-[16px] relative text-center uppercase w-full">
        <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium relative shrink-0 text-[#b3b3b2] text-[14px] w-full">Clients</p>
        <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold not-italic relative shrink-0 text-[#da9e8b] text-[40px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          200+
        </p>
      </div>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Text Container">
      <div className="content-stretch flex flex-col gap-[10px] items-start leading-[1.5] px-[14px] py-[16px] relative text-center w-full">
        <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium relative shrink-0 text-[#b3b3b2] text-[14px] w-full">PROJECTS</p>
        <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold not-italic relative shrink-0 text-[#da9e8b] text-[40px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          280+
        </p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <TextContainer />
      <TextContainer1 />
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Text Container">
      <div className="content-stretch flex flex-col gap-[10px] items-start leading-[1.5] px-[14px] py-[16px] relative text-center w-full">
        <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium relative shrink-0 text-[#b3b3b2] text-[14px] w-full">HAPPY CLIENTS</p>
        <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold not-italic relative shrink-0 text-[#da9e8b] text-[40px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          100%
        </p>
      </div>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] min-h-px min-w-px relative rounded-[12px]" data-name="Text Container">
      <div className="content-stretch flex flex-col gap-[10px] items-start leading-[1.5] px-[14px] py-[16px] relative text-center w-full">
        <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium relative shrink-0 text-[#b3b3b2] text-[14px] w-full">FOLLOWER</p>
        <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold not-italic relative shrink-0 text-[#da9e8b] text-[40px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          420K
        </p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <TextContainer2 />
      <TextContainer3 />
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Text Container">
      <div className="content-stretch flex flex-col gap-[10px] items-start leading-[1.5] px-[14px] py-[16px] relative text-center w-full">
        <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium relative shrink-0 text-[#b3b3b2] text-[14px] w-full">Years Of Experience</p>
        <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold not-italic relative shrink-0 text-[#da9e8b] text-[40px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
          10+
        </p>
      </div>
    </div>
  );
}

function Icon2() {
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

function IconContainer() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon2 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[20px] relative w-full">
          <IconContainer />
          <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[14px] uppercase whitespace-nowrap">Know More</p>
        </div>
      </div>
    </div>
  );
}

function SubContainer2() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Sub Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative w-full">
          <Container4 />
          <Container5 />
          <TextContainer4 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-start left-1/2 top-[133px] w-[358px]" data-name="Container">
      <Container1 />
      <SubContainer2 />
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative w-full">
          <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f9efec] text-[28px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Reasons to Choose NexGen for Your Digital Journey
          </p>
        </div>
      </div>
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[20px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Expertise in Cutting-Edge Technologies
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        NexGen ensures your projects are powered by state-of-the-art technologies, guaranteeing...
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
    <div className="bg-[#0f0f0f] content-stretch flex items-start p-[16px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <p className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#b3b3b2] text-[16px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Learn More
      </p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <TextContainer6 />
        <Container7 />
      </div>
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[20px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Proven Track Record of Success
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        NexGen demonstrates a consistent ability to meet and exceed client expectations, providing reliable...
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

function Button4() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-start p-[16px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon4 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <p className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#b3b3b2] text-[16px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Learn More
      </p>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <TextContainer7 />
        <Container8 />
      </div>
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[20px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Client-Centric Approach
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`At NexGen, we prioritize understanding our clients' unique requirements, fostering ...`}</p>
    </div>
  );
}

function Icon5() {
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
    <div className="bg-[#0f0f0f] content-stretch flex items-start p-[16px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <p className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#b3b3b2] text-[16px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Learn More
      </p>
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <TextContainer8 />
        <Container9 />
      </div>
    </div>
  );
}

function TextContainer9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[20px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Dedicated Team of Professionals
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable...
      </p>
    </div>
  );
}

function Icon6() {
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

function Button6() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-start p-[16px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon6 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <p className="flex-[1_0_0] font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px not-italic relative text-[#b3b3b2] text-[16px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Learn More
      </p>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <TextContainer9 />
        <Container10 />
      </div>
    </div>
  );
}

function ItemsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Items Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Container6() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-start left-1/2 p-[10px] rounded-[16px] top-[988px] w-[358px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <TextContainer5 />
      <ItemsContainer />
    </div>
  );
}

function TextContainer10() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative w-full">
          <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f9efec] text-[28px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Our Services
          </p>
        </div>
      </div>
    </div>
  );
}

function BoldDesignToolsRulerCrossPen() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Bold / Design, Tools / Ruler Cross Pen">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Bold / Design, Tools / Ruler Cross Pen">
          <g id="Vector">
            <path d={svgPaths.p62fab00} fill="var(--fill-0, #CE7D63)" />
            <path d={svgPaths.p378bd700} fill="var(--fill-0, #CE7D63)" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p2f30d400} fill="var(--fill-0, #CE7D63)" />
            <path d={svgPaths.p1c4be740} fill="var(--fill-0, #CE7D63)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer1() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[10px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <BoldDesignToolsRulerCrossPen />
    </div>
  );
}

function SubContainer3() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-name="Sub Container">
      <IconContainer1 />
      <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px not-italic relative text-[#f9efec] text-[20px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Web Design
      </p>
    </div>
  );
}

function TextContainer11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Starts From $1,500
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting.
      </p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#ce7d63] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[14px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Book A Call
          </p>
        </div>
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[24px] relative w-full">
          <SubContainer3 />
          <TextContainer11 />
          <Button7 />
        </div>
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

function IconContainer2() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[10px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <BoldElectronicDevicesSmartphone />
    </div>
  );
}

function SubContainer4() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-name="Sub Container">
      <IconContainer2 />
      <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px not-italic relative text-[#f9efec] text-[20px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Mobile App Development
      </p>
    </div>
  );
}

function TextContainer12() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Starts From $2,500
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications .
      </p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#ce7d63] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[14px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Book A Call
          </p>
        </div>
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[24px] relative w-full">
          <SubContainer4 />
          <TextContainer12 />
          <Button8 />
        </div>
      </div>
    </div>
  );
}

function BoldNetworkItProgrammingCodeCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Bold / Network, IT, Programming / Code Circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Bold / Network, IT, Programming / Code Circle">
          <path clipRule="evenodd" d={svgPaths.p17daea70} fill="var(--fill-0, #CE7D63)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer3() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[10px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <BoldNetworkItProgrammingCodeCircle />
    </div>
  );
}

function SubContainer5() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-name="Sub Container">
      <IconContainer3 />
      <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px not-italic relative text-[#f9efec] text-[20px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Web Development
      </p>
    </div>
  );
}

function TextContainer13() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Starts From $1,800
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.
      </p>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#ce7d63] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[14px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Book A Call
          </p>
        </div>
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[24px] relative w-full">
          <SubContainer5 />
          <TextContainer13 />
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function BoldSettingsFineTuningWidget() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Bold / Settings, Fine Tuning / Widget 6">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Bold / Settings, Fine Tuning / Widget 6">
          <g id="Vector">
            <path d={svgPaths.p11323b00} fill="var(--fill-0, #CE7D63)" />
            <path d={svgPaths.p398e7200} fill="var(--fill-0, #CE7D63)" />
            <path d={svgPaths.p1199de00} fill="var(--fill-0, #CE7D63)" />
            <path d={svgPaths.pa727500} fill="var(--fill-0, #CE7D63)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconContainer4() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[10px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <BoldSettingsFineTuningWidget />
    </div>
  );
}

function SubContainer6() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0 w-full" data-name="Sub Container">
      <IconContainer4 />
      <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px not-italic relative text-[#f9efec] text-[20px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Quality Engineering
      </p>
    </div>
  );
}

function TextContainer14() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[1.5] not-italic relative shrink-0 w-full" data-name="Text Container">
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium relative shrink-0 text-[#f9efec] text-[18px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Starts From $1,200
      </p>
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal relative shrink-0 text-[#b3b3b2] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`In the software economy, reliability is critical for growth. Our Quality Engineering service combines automation and rigorous testing to improve release confidence.`}</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#ce7d63] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[14px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#0f0f0f] text-[14px] text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Book A Call
          </p>
        </div>
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[24px] relative w-full">
          <SubContainer6 />
          <TextContainer14 />
          <Button10 />
        </div>
      </div>
    </div>
  );
}

function ItemsContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Items Container">
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
    </div>
  );
}

function Container11() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-start left-1/2 p-[10px] rounded-[16px] top-[2193px] w-[358px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <TextContainer10 />
      <ItemsContainer1 />
    </div>
  );
}

function TextContainer15() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Text Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative w-full">
          <p className="font-['Roboto_Flex:SemiBold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#f9efec] text-[28px] uppercase w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Our Works
          </p>
        </div>
      </div>
    </div>
  );
}

function BoldEssentionalUiMagicStick() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Bold / Essentional, UI / Magic Stick 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Bold / Essentional, UI / Magic Stick 2">
          <path d={svgPaths.p25bd2900} fill="var(--fill-0, #CE7D63)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer5() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[10px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <BoldEssentionalUiMagicStick />
    </div>
  );
}

function SubContainer7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Sub Container">
      <IconContainer5 />
      <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px not-italic relative text-[#f9efec] text-[16px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Zenith Fitness App
      </p>
    </div>
  );
}

function TextContainer16() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative rounded-[45px] shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Category
      </p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #CE7D63)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#e6e6e6] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Mobile App Development
      </p>
    </div>
  );
}

function TextContainer17() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative rounded-[45px] shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Time Taken
      </p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #CE7D63)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#e6e6e6] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        6 months
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <TextContainer16 />
      <TextContainer17 />
    </div>
  );
}

function Icon7() {
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

function Button11() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon7 />
    </div>
  );
}

function SubContainer8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Sub Container">
      <Button11 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[16px] uppercase whitespace-nowrap">Details</p>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[24px] relative w-full">
          <SubContainer7 />
          <Container14 />
          <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#b3b3b2] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            An all-in-one health and wellness app that offers personalized fitness plans, nutrition guidance
          </p>
          <SubContainer8 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center p-[10px] relative w-full">
          <div className="h-[184px] relative rounded-[14px] shrink-0 w-full" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[14px] size-full" src={imgImage} />
          </div>
          <Card8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function BoldEssentionalUiBalloon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Bold / Essentional, UI / Balloon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Bold / Essentional, UI / Balloon">
          <path clipRule="evenodd" d={svgPaths.p34450270} fill="var(--fill-0, #CE7D63)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p13db5300} fill="var(--fill-0, #CE7D63)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function IconContainer6() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[14px] relative rounded-[10px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <BoldEssentionalUiBalloon />
    </div>
  );
}

function SubContainer9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Sub Container">
      <IconContainer6 />
      <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] min-h-px min-w-px not-italic relative text-[#f9efec] text-[16px] uppercase" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        A-Aura Ecommerce
      </p>
    </div>
  );
}

function TextContainer18() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative rounded-[45px] shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Category
      </p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #CE7D63)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#e6e6e6] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>{`Web Design & Development`}</p>
    </div>
  );
}

function TextContainer19() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex gap-[4px] items-center px-[10px] py-[6px] relative rounded-[45px] shrink-0" data-name="Text Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#b3b3b2] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Time Taken
      </p>
      <div className="relative shrink-0 size-[4px]" data-name="Shape">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #CE7D63)" id="Shape" r="2" />
        </svg>
      </div>
      <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#e6e6e6] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        3 months
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-start flex flex-wrap gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <TextContainer18 />
      <TextContainer19 />
    </div>
  );
}

function Icon8() {
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

function Button12() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon8 />
    </div>
  );
}

function SubContainer10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Sub Container">
      <Button12 />
      <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[16px] uppercase whitespace-nowrap">Details</p>
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start justify-center p-[24px] relative w-full">
          <SubContainer9 />
          <Container16 />
          <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#b3b3b2] text-[14px] w-[min-content]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            A complete overhaul of a corporate website to enhance its brand identity and user experience.
          </p>
          <SubContainer10 />
        </div>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center p-[10px] relative w-full">
          <div className="h-[184px] relative rounded-[14px] shrink-0 w-full" data-name="Image">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[14px]">
              <div className="absolute bg-white inset-0 rounded-[14px]" />
              <img alt="" className="absolute max-w-none object-cover rounded-[14px] size-full" src={imgImage1} />
            </div>
          </div>
          <Card9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function ItemsContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Items Container">
      <Container13 />
      <Container15 />
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

function IconContainer7() {
  return (
    <div className="bg-[#0f0f0f] content-stretch flex items-start p-[14px] relative rounded-[100px] shrink-0" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#262626] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon9 />
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[20px] relative w-full">
          <IconContainer7 />
          <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[14px] uppercase whitespace-nowrap">ALL Works</p>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[10px] items-start left-1/2 p-[10px] rounded-[14px] top-[3574px] w-[358px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <TextContainer15 />
      <ItemsContainer2 />
      <Button13 />
    </div>
  );
}

function TextContainer20() {
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

function Container18() {
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

function TextContainer21() {
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

function SubContainer11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[40px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#ce7d63] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgImage2} />
        </div>
      </div>
      <TextContainer21 />
    </div>
  );
}

function Icon10() {
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

function Button14() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon10 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[16px] relative w-full">
          <SubContainer11 />
          <Button14 />
        </div>
      </div>
    </div>
  );
}

function Card10() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container20() {
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

function TextContainer22() {
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

function SubContainer12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[40px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#ce7d63] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgImage3} />
        </div>
      </div>
      <TextContainer22 />
    </div>
  );
}

function Icon11() {
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

function Button15() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon11 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[16px] relative w-full">
          <SubContainer12 />
          <Button15 />
        </div>
      </div>
    </div>
  );
}

function Card11() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container22() {
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

function TextContainer23() {
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

function SubContainer13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Sub Container">
      <div className="relative rounded-[100px] shrink-0 size-[40px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[100px]">
          <div className="absolute bg-[#ce7d63] inset-0 rounded-[100px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[100px] size-full" src={imgImage4} />
        </div>
      </div>
      <TextContainer23 />
    </div>
  );
}

function Icon12() {
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

function Button16() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon12 />
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#1f1f1f] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[20px] py-[16px] relative w-full">
          <SubContainer13 />
          <Button16 />
        </div>
      </div>
    </div>
  );
}

function Card12() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-center overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Card">
      <Container22 />
      <Container23 />
    </div>
  );
}

function ItemsContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Items Container">
      <Card10 />
      <Card11 />
      <Card12 />
    </div>
  );
}

function Icon13() {
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
      <Icon13 />
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[16px] py-[20px] relative w-full">
          <IconContainer8 />
          <p className="font-['Roboto_Mono:Medium',sans-serif] font-medium leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[14px] uppercase whitespace-nowrap">ALL Testimonials</p>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bottom-[2694px] content-stretch flex flex-col gap-[10px] items-start left-[16px] p-[10px] rounded-[14px] w-[358px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#1f1f1f] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <TextContainer20 />
      <ItemsContainer3 />
      <Button17 />
    </div>
  );
}

function TextContainer24() {
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

function Icon14() {
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

function Button18() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon14 />
    </div>
  );
}

function SubContainer14() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <p className="flex-[1_0_0] font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[normal] min-h-px min-w-px not-italic relative text-[#f9efec] text-[18px]" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        How long does it take to complete a web development project?
      </p>
      <Button18 />
    </div>
  );
}

function FaqItemOpen() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="FAQ Item Open">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[30px] relative w-full">
        <SubContainer14 />
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

function Icon15() {
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

function Button19() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon15 />
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
          <Button19 />
        </div>
      </div>
    </div>
  );
}

function Icon16() {
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

function Button20() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon16 />
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
          <Button20 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
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

function Button21() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon17 />
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
          <Button21 />
        </div>
      </div>
    </div>
  );
}

function Icon18() {
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

function Button22() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon18 />
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
          <Button22 />
        </div>
      </div>
    </div>
  );
}

function ItemsContainer4() {
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

function Container25() {
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

function Container26() {
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

function Container27() {
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
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Button23() {
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
          <Button23 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bottom-[1288px] content-stretch flex flex-col gap-[10px] items-start left-[16px] w-[358px]" data-name="Container">
      <TextContainer24 />
      <ItemsContainer4 />
      <Form />
    </div>
  );
}

function TextContainer25() {
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

function Icon19() {
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

function Button24() {
  return (
    <div className="bg-[#0f0f0f] relative rounded-[12px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[14px] relative w-full">
          <p className="font-['Roboto_Flex:Medium',sans-serif] font-medium leading-[1.5] not-italic relative shrink-0 text-[#f3dfd8] text-[14px] text-center uppercase whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
            Get in Touch
          </p>
          <Icon19 />
        </div>
      </div>
    </div>
  );
}

function SubContainer15() {
  return (
    <div className="bg-[#ce7d63] relative rounded-[14px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-col items-center justify-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-end p-[30px] relative w-full">
          <TextContainer25 />
          <Button24 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
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

function SubContainer16() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[8px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[14px] relative w-full">
          <Container29 />
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

function Icon20() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <Logo1 />
    </div>
  );
}

function IconContainer9() {
  return (
    <div className="bg-[#1f1f1f] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[14px] relative w-full">
          <Icon20 />
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

function Icon21() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <Capa />
    </div>
  );
}

function IconContainer10() {
  return (
    <div className="bg-[#1f1f1f] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[14px] relative w-full">
          <Icon21 />
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

function Icon22() {
  return (
    <div className="h-[28px] relative shrink-0 w-[29.217px]" data-name="Icon">
      <div className="absolute inset-[0_0.46%_0.48%_4.17%]" data-name="Logo Container" />
      <Group1 />
    </div>
  );
}

function IconContainer11() {
  return (
    <div className="bg-[#1f1f1f] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[14px] relative w-full">
          <Icon22 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[20.83%_3.9%_21.56%_3.93%]" data-name="Group">
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

function Icon23() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <Group />
    </div>
  );
}

function IconContainer12() {
  return (
    <div className="bg-[#1f1f1f] flex-[1_0_0] min-h-px min-w-px relative rounded-[10px]" data-name="Icon Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[14px] relative w-full">
          <Icon23 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <IconContainer9 />
      <IconContainer10 />
      <IconContainer11 />
      <IconContainer12 />
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

function Container32() {
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

function Container33() {
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
      <Container32 />
      <Container33 />
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

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative" data-name="Container">
      <p className="font-['Roboto_Mono:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f3dfd8] text-[18px] w-full">Projects</p>
      <LinksContainer2 />
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

function Container36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Design
      </p>
      <SubContainer19 />
    </div>
  );
}

function SubContainer20() {
  return (
    <div className="bg-[#262626] content-stretch flex items-center px-[10px] py-[4px] relative rounded-[6px] shrink-0" data-name="Sub Container">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#ccc] text-[12px] tracking-[-0.36px] whitespace-nowrap">Soon</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Development
      </p>
      <SubContainer20 />
    </div>
  );
}

function LinksContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Links Container">
      <p className="font-['Roboto_Flex:Regular',sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#81807e] text-[14px] w-full" style={{ fontVariationSettings: "'GRAD' 0, 'XOPQ' 96, 'XTRA' 468, 'YOPQ' 79, 'YTAS' 750, 'YTDE' -203, 'YTFI' 738, 'YTLC' 514, 'YTUC' 712, 'wdth' 100" }}>
        Business
      </p>
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container35() {
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
      <Container34 />
      <Container35 />
    </div>
  );
}

function SubContainer18() {
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

function TextContainer26() {
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

function Icon24() {
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

function Button25() {
  return (
    <div className="bg-[#1f1f1f] content-stretch flex items-start p-[10px] relative rounded-[100px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#333] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Icon24 />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[8px] items-end relative rounded-[10px] shrink-0 w-[316px]" data-name="Container">
      <InputField3 />
      <Button25 />
    </div>
  );
}

function SubContainer21() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-end p-[24px] relative w-full">
          <TextContainer26 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
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

function SubContainer22() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[14px] shrink-0 w-full" data-name="Sub Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center justify-center p-[24px] relative w-full">
          <p className="font-['Roboto_Mono:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#b3b3b2] text-[14px] text-center whitespace-nowrap">© 2024 NexGen. All rights reserved.</p>
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <SubContainer18 />
      <SubContainer21 />
      <SubContainer22 />
    </div>
  );
}

function SubContainer17() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Sub Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container28() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col gap-[10px] items-center left-[calc(50%+0.5px)] pb-[20px] w-[357px]" data-name="Container">
      <SubContainer15 />
      <SubContainer16 />
      <SubContainer17 />
    </div>
  );
}

export default function HomePageMobile() {
  return (
    <div className="bg-[#0f0f0f] relative size-full" data-name="Home Page - Mobile">
      <Navbar />
      <Container />
      <Container6 />
      <Container11 />
      <Container12 />
      <Container17 />
      <Container24 />
      <Container28 />
    </div>
  );
}



