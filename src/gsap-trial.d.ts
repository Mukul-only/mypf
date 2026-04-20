declare module 'gsap-trial/SplitText' {
  export class SplitText {
    constructor(element: Element | Element[] | string | string[], options?: any);
    chars?: Element[];
    words?: Element[];
    lines?: Element[];
    revert(): void;
  }
}

declare module 'gsap-trial/ScrollSmoother' {
  export class ScrollSmoother {
    static create(options?: any): ScrollSmoother;
    static get(): ScrollSmoother | null;
    static refresh(soft?: boolean): void;
    scrollTop(value?: number): number;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    paused(value?: boolean): boolean;
    kill(): void;
  }
}

declare module 'gsap-trial/ScrollTrigger' {
  export class ScrollTrigger {
    static create(options?: any): ScrollTrigger;
    static refresh(): void;
    static update(): void;
    kill(): void;
  }
}
