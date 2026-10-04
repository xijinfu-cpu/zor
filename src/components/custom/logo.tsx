import { FunctionComponent, SVGProps } from "react";
import { cn } from "@/lib/utils";

interface LogoProps extends SVGProps<SVGSVGElement> {
    accent?: string;
    tone?: "positive" | "reverse";
    hasAccent?: boolean;
}

/**
 * Official ZORS CRAFT Maker's Mark Symbol
 * Locked geometry from ZORS CRAFT Asset Studio (D1-B / Balanced Master).
 * Positive: Carbon Ink (#171715) on transparent.
 * Reverse: Workshop Paper (#F0ECE2) on transparent.
 * Accent: Modern Ochre (#A88C40) Precision Shim.
 */
export const ZorsSymbol: FunctionComponent<LogoProps> = ({
    className,
    accent = "#A88C40",
    tone = "positive",
    hasAccent = true,
    ...props
}) => {
    const ink = tone === "reverse" ? "#F0ECE2" : "#171715";

    return (
        <svg
            viewBox="-1 -1 136 113"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("shrink-0", className)}
            aria-label="ZORS CRAFT Symbol"
            {...props}
        >
            <g id="01_MARK" fill={ink}>
                <path
                    id="Component_A"
                    d="M 5 0 L 58 0 C 61 0 63 1.5 63 4 L 63 21 C 63 22.5 62.5 23.5 61.5 24.5 L 44 43 C 42.8 44.5 41.5 45 40 45 L 4 45 C 1.5 45 0 43.5 0 41 L 0 5 C 0 2 2 0 5 0 Z M 5 56 L 31 56 C 32.5 56 33.5 56.2 34.5 57.5 L 40 63 L 40 75 C 40 76.5 40.5 77.5 41.5 78.5 L 46.5 82.5 L 128.5 82.5 C 132 82.5 134 84.5 134 88 L 134 106 C 134 109.2 132.5 111 129 111 L 8 111 L 0 104 L 0 61 C 0 58 2 56 5 56 Z"
                />
                <path
                    id="Component_B"
                    d="M 102 0 L 129 0 C 132.2 0 134 1.8 134 5 L 134 67.5 C 134 71 132 73 129 73 L 67 73 C 63 73 61 70.8 61 67 L 61 45 C 61 43 61.5 42 63 40.5 L 96.5 3 C 98 1 99.5 0 102 0 Z"
                />
            </g>
            {hasAccent && (
                <g id="02_SIGNATURE_ACCENT" fill={accent}>
                    <path
                        id="Modern_Ochre_Precision_Shim"
                        d="M 61 44 L 61 67 C 61 69.5 62 71.5 64 72.5 L 60.5 72.5 C 57.8 72.5 57 70.5 57 67.5 L 57 48 Z"
                    />
                </g>
            )}
        </svg>
    );
};

/**
 * Official ZORS CRAFT Horizontal Lockup
 * Symbol + Outlined Wordmark (Neue Haas Grotesk locked geometry).
 */
export const ZorsLockup: FunctionComponent<LogoProps> = ({
    className,
    accent = "#A88C40",
    tone = "positive",
    hasAccent = true,
    ...props
}) => {
    const ink = tone === "reverse" ? "#F0ECE2" : "#171715";

    return (
        <svg
            viewBox="-2 -2 560.48 115"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("shrink-0", className)}
            aria-label="ZORS CRAFT Lockup"
            {...props}
        >
            {hasAccent && (
                <g id="02_SIGNATURE_ACCENT" fill={accent}>
                    <path
                        id="Modern_Ochre_Precision_Shim"
                        d="M 61 44 L 61 67 C 61 69.5 62 71.5 64 72.5 L 60.5 72.5 C 57.8 72.5 57 70.5 57 67.5 L 57 48 Z"
                    />
                </g>
            )}
            <g id="locked-standard-mark" fill={ink}>
                <path d="M 5 0 L 58 0 C 61 0 63 1.5 63 4 L 63 21 C 63 22.5 62.5 23.5 61.5 24.5 L 44 43 C 42.8 44.5 41.5 45 40 45 L 4 45 C 1.5 45 0 43.5 0 41 L 0 5 C 0 2 2 0 5 0 Z M 5 56 L 31 56 C 32.5 56 33.5 56.2 34.5 57.5 L 40 63 L 40 75 C 40 76.5 40.5 77.5 41.5 78.5 L 46.5 82.5 L 128.5 82.5 C 132 82.5 134 84.5 134 88 L 134 106 C 134 109.2 132.5 111 129 111 L 8 111 L 0 104 L 0 61 C 0 58 2 56 5 56 Z" />
                <path d="M 102 0 L 129 0 C 132.2 0 134 1.8 134 5 L 134 67.5 C 134 71 132 73 129 73 L 67 73 C 63 73 61 70.8 61 67 L 61 45 C 61 43 61.5 42 63 40.5 L 96.5 3 C 98 1 99.5 0 102 0 Z" />
            </g>
            <g id="outlined-wordmark" fill={ink}>
                <path
                    transform="translate(171.266503497 74.370000000) scale(0.052783216783 -0.052783216783)"
                    d="M30 0H586V81H135V84L569 645V715H55V639H458V636L30 86Z"
                />
                <path
                    transform="translate(209.112069930 74.370000000) scale(0.052783216783 -0.052783216783)"
                    d="M390 -15C606 -15 740 144 740 358C740 572 606 731 390 731C174 731 40 572 40 358C40 144 174 -15 390 -15ZM390 64C222 64 132 190 132 358C132 526 222 653 390 653C558 653 648 526 648 358C648 190 558 64 390 64Z"
                />
                <path
                    transform="translate(257.672629371 74.370000000) scale(0.052783216783 -0.052783216783)"
                    d="M67 0H157V302H356C452 302 494 265 501 160C509 40 512 13 527 0H624V4C611 13 599 42 591 157C584 263 561 313 488 339V342C574 370 612 432 612 519C612 636 527 715 401 715H67ZM157 637H374C479 637 519 593 519 506C519 425 469 375 369 375H157Z"
                />
                <path
                    transform="translate(299.054671329 74.370000000) scale(0.052783216783 -0.052783216783)"
                    d="M327 -14C481 -14 590 61 590 195C590 356 463 390 324 418C217 439 137 463 137 544C137 618 201 659 298 659C403 659 469 608 482 506H567C549 638 475 729 296 729C151 729 53 658 53 540C53 405 161 369 287 341C415 313 501 290 501 192C501 103 430 58 331 58C196 58 122 121 110 242H22C30 98 126 -14 327 -14Z"
                />
                <path
                    transform="translate(360.811034965 74.370000000) scale(0.052783216783 -0.052783216783)"
                    d="M375 -14C466 -14 539 12 589 61C640 111 674 191 675 262H586C577 157 513 65 378 65C229 65 132 183 132 358C132 526 220 653 377 653C490 653 561 592 578 503H666C647 635 546 731 379 731C166 731 40 568 40 358C40 141 172 -14 375 -14Z"
                />
                <path
                    transform="translate(405.623986014 74.370000000) scale(0.052783216783 -0.052783216783)"
                    d="M67 0H157V302H356C452 302 494 265 501 160C509 40 512 13 527 0H624V4C611 13 599 42 591 157C584 263 561 313 488 339V342C574 370 612 432 612 519C612 636 527 715 401 715H67ZM157 637H374C479 637 519 593 519 506C519 425 469 375 369 375H157Z"
                />
                <path
                    transform="translate(447.006027972 74.370000000) scale(0.052783216783 -0.052783216783)"
                    d="M10 0H102L179 218H464L540 0H638L374 715H273ZM290 531C304 572 323 632 323 632H325C325 632 343 571 357 531L439 291H205Z"
                />
                <path
                    transform="translate(488.071370629 74.370000000) scale(0.052783216783 -0.052783216783)"
                    d="M67 0H157V337H486V413H157V636H552V715H67Z"
                />
                <path
                    transform="translate(525.441888112 74.370000000) scale(0.052783216783 -0.052783216783)"
                    d="M22 636H260V0H350V636H588V715H22Z"
                />
            </g>
        </svg>
    );
};
