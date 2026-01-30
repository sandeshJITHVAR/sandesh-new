'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

export const cardsData = [
    { id: '01', title: 'RUN THE THREAD' },
    { id: '02', title: 'LIGHT (UNDER CONTROL)' },
    { id: '03', title: 'MADE FOR MOTION' },
    { id: '04', title: 'BRING YOUR OWN ANIMATION LIBRARY' },
    { id: '05', title: 'SMOOTH BY DEFAULT' },
    { id: '06', title: 'CONTROL THE FLOW' },
];

gsap.registerPlugin(ScrollTrigger);

export default function StickyCards() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        gsap.ticker.lagSmoothing(0);

        const cards = gsap.utils.toArray<HTMLElement>('.card');
        const header = headerRef.current;
        const container = containerRef.current;

        cards.forEach((card) => {
            gsap.set(card, {
                y: window.innerHeight,
                opacity: 0,
            });
        });

        if (header) gsap.set(header, { opacity: 0 });

        const headerHeight = header?.offsetHeight || 0;
        const HOLD_AFTER_LAST = window.innerHeight * 0.6;

        const totalHeight =
            headerHeight + window.innerHeight * 3.5 + HOLD_AFTER_LAST;

        ScrollTrigger.create({
            trigger: container,
            start: 'top top',
            end: `+=${totalHeight}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,

            onUpdate: (self) => {
                const progress = self.progress;
                const totalCards = cards.length;
                const progressPerCard = 1 / totalCards;

                const TOP_GAP = 40;
                const LEFT_GAP = 100;
                const HORIZONTAL_STACK_OFFSET = 90;
                const VERTICAL_STACK_OFFSET = 30;

                const containerWidth =
                    container?.offsetWidth || window.innerWidth;

                const RIGHT_SAFE_GAP = containerWidth * 0.35;
                const MAX_STACK_WIDTH = containerWidth - RIGHT_SAFE_GAP;

                /* HEADER */
                const headerRevealProgress = Math.min(progress * 5, 1);
                if (header) {
                    gsap.to(header, {
                        opacity: headerRevealProgress,
                        duration: 0,
                    });
                }

                /* CARD TIMING */
                const cardAnimationStart = 0.2;
                let adjustedProgress = 0;

                if (progress > cardAnimationStart) {
                    adjustedProgress =
                        (progress - cardAnimationStart) /
                        (1 - cardAnimationStart);
                }

                cards.forEach((card, index) => {
                    const effectiveProgress =
                        index === 0 ? progress : adjustedProgress;

                    if (effectiveProgress <= 0) {
                        gsap.to(card, { opacity: 0, duration: 0 });
                        return;
                    }

                    const cardStart = index * progressPerCard;
                    let cardProgress =
                        (effectiveProgress - cardStart) / progressPerCard;

                    cardProgress = Math.min(Math.max(cardProgress, 0), 1);

                    const targetX = Math.min(
                        LEFT_GAP + index * HORIZONTAL_STACK_OFFSET,
                        MAX_STACK_WIDTH - card.offsetWidth
                    );

                    let x = 0;
                    let y = window.innerHeight;
                    let opacity = 0;

                    if (cardProgress < 1) {
                        y =
                            window.innerHeight -
                            cardProgress *
                            (window.innerHeight -
                                TOP_GAP -
                                index * VERTICAL_STACK_OFFSET);

                        x = cardProgress * targetX;
                        opacity = cardProgress;
                    }

                    if (cardProgress === 1) {
                        y = TOP_GAP + index * VERTICAL_STACK_OFFSET;
                        x = targetX;
                        opacity = 1;
                    }

                    gsap.to(card, {
                        x,
                        y,
                        opacity,
                        duration: 0,
                        ease: 'none',
                    });
                });
            },
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());

        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative  h-screen w-full overflow-hidden "
        >
            <div className=' max-w-[1480px] '>

   <div className="absolute top-0 left-0 w-full pt-10 pointer-events-none">
                <div className="ml-auto text-end mr-[8vw] max-w-[520px]">
                    <h2 className="text-6xl font-extrabold leading-tight text-white">
                        LENIS BRINGS
                        <br />
                        <span className="text-gray-400">THE HEAT</span>
                    </h2>
                </div>
            </div>
            {cardsData.map((card) => (
                <div
                    key={card.id}
                    className="card absolute left-0 top-0 h-[60vh] w-[30vw]
               border border-white/10 bg-gradient-to-br from-[#111] to-[#0b0b0b]
               shadow-[0_20px_60px_rgba(0,0,0,0.12)]
               p-6 opacity-0
               flex flex-col"
                >
                    {/* ID – top-left corner */}
                    <div className="text-6xl font-bold text-gray-800">
                        {card.id}
                    </div>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Title – bottom-right */}
                    <h2 className="text-4xl font-bold text-right">
                        {card.title}
                    </h2>
                </div>
            ))}
            </div>
         

        </section>
    );
}
