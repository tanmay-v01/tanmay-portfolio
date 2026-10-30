"""
LinkedIn Automated Post Generator & Queue System for Tanmay Vaity (Senior Product & UI/UX Designer)

Tailored using deep content analysis of top 20 LinkedIn Product Design Creators:
- Zander Whitehurst (Visual micro-tips & hooks)
- Mizko / Michael Wong (Product strategy & business ROI)
- Femke van Schoonhoven (Design systems & career leverage)
- Ridd / Dive Club (Design decisions & deep-dive breakdowns)
- Erik Kennedy / Learn UI (Micro-rules for visual hierarchy)
"""

import os
import json

HIGH_IMPACT_VIRAL_POSTS = [
    {
        "id": "post_01_micro_fix",
        "topic": "5 Visual Padding & Hierarchy Mistakes Most Designers Make",
        "post_type": "carousel_visual",
        "scheduled_day": "Monday",
        "hook": "Most UI designs look 'amateur' not because of colors or fonts, but because of uneven spatial math.",
        "content": """Most UI designs look 'amateur' not because of colors or fonts, but because of uneven spatial math.

Here are 4 micro-rules I use on every screen to make layouts instantly look clean and senior-level:

1. The 4pt / 8pt Grid Lock
Never use 7px, 13px, or 23px margins. Stick strictly to 4, 8, 12, 16, 24, 32, 48px. Predictable spacing creates rhythm.

2. Container Padding Rule (Internal < External)
The spacing INSIDE a button or card must ALWAYS be smaller than the space OUTSIDE it. When internal padding equals external gap, elements lose grouping context.

3. Font Weight Contrast over Font Size
Instead of making headlines huge (48px vs 16px), keep font sizes closer (24px vs 16px) and increase weight contrast (800 Bold vs 400 Regular).

4. Optical Alignment > Math Alignment
Icon badges, Play icons inside circles, and bullet points often need a 1-2px offset to LOOK centered, even when Figma says they are mathematically centered.

Small spatial details separate average UI from high-craft product design.

Which spacing rule do you find hardest to enforce across a design system? Let me know below! 👇

#UIUX #ProductDesign #Figma #DesignSystems #UserInterface #WebDesign"""
    },
    {
        "id": "post_02_ai_ux_framework",
        "topic": "The 3 Non-Negotiable UX Principles for AI Products in 2026",
        "post_type": "text_thought_leadership",
        "scheduled_day": "Wednesday",
        "hook": "Designing for AI is completely different from traditional software. Traditional UI is deterministic. AI UI is probabilistic.",
        "content": """Designing for AI is completely different from traditional software.

In traditional SaaS: Input A ALWAYS equals Output B.
In AI Software: Input A produces Output B with 85% probability, Output C with 10%, and a hallucination 5% of the time.

If your UX doesn't design for uncertainty, your users will lose trust instantly.

Here are 3 non-negotiable UX patterns for AI interfaces:

1. Inline Verification & Editing
Don't make users read an entire AI response to copy-paste it elsewhere. Give them inline inline-edits, inline regens, and 1-click apply actions right where the output lands.

2. Confidence & Source Transparency
If an AI agent summarizes a 50-page document or generates financial insights, ALWAYS provide hoverable source citations and confidence indicators.

3. Granular Undo & Branching
When AI generates a draft or code block, users need to branch off alternative versions easily without losing their prompt context.

The best AI products don't replace human decision-making — they amplify human velocity.

What's the best AI UX pattern you've seen recently?

#AIUX #ProductDesign #GenerativeAI #UserExperience #SaaS #DesignThinking"""
    },
    {
        "id": "post_03_business_impact",
        "topic": "Why Senior Designers Focus on Business Metrics, Not Just Pixels",
        "post_type": "text_career_strategy",
        "scheduled_day": "Friday",
        "hook": "Junior designers present screens. Senior designers present business outcomes.",
        "content": """Junior designers present screens. Senior designers present business outcomes.

When I started in UX, I used to present my designs to stakeholders by walking them through screens step-by-step:
"Here's the hero section, here's the button, here's the card..."

Stakeholders would immediately nitpick colors, font sizes, and layout tweaks.

Everything changed when I flipped the presentation framework:

❌ Don't Say: "We redesigned the mobile checkout page with bigger buttons and dark mode."
✅ Say: "We restructured the mobile checkout flow to reduce tap-friction, targeting a 15% reduction in cart abandonment on mobile networks."

When you connect every design decision to:
• Conversion Rate
• Time to Task Completion
• User Retention
• Engineering Implementation Effort

...you stop getting treated like an order-taker and start operating as a strategic product partner.

How do you communicate design value to stakeholders in your team?

#ProductStrategy #UXDesign #CareerAdvice #DesignLeadership #ProductManagement"""
    },
    {
        "id": "post_04_figma_power_tips",
        "topic": "Figma Auto Layout & Component Architecture Hacks",
        "post_type": "carousel_tactical",
        "scheduled_day": "Monday",
        "hook": "If your Figma file breaks every time text content changes, your component structure needs a reset.",
        "content": """If your Figma file breaks every time text content changes, your component structure needs a reset.

Here are 4 Figma auto-layout principles that save hours of refactoring:

1. Use 'Fill Container' for Responsive Rows
Stop setting explicit pixel widths on text layers inside cards. Set the parent to Auto Layout and the child text layer to 'Fill Container'.

2. Min and Max Dimensions on Cards
Combine Auto Layout with Min-Width (e.g. 280px) and Max-Width (e.g. 480px) so your components adapt seamlessly across desktop, tablet, and mobile frames.

3. Absolute Positioning for Badges & Close Buttons
Don't create complex nested frames just to place a notification dot on an icon. Use Absolute Position (Shift + A override) inside the component.

4. Slot Components for Modals & Cards
Instead of building 50 variants of a modal, build ONE modal shell component with a flexible 'Slot' instance inside it.

Clean Figma component architecture = faster handoffs + zero engineering confusion.

What's your favorite Figma shortcut or feature this year?

#Figma #DesignSystems #UIDesign #UXTools #ProductDesign"""
    },
    {
        "id": "post_05_case_study_teardown",
        "topic": "Case Study Spotlight: Redesigning Sports Analytics for High Velocity",
        "post_type": "portfolio_case_study",
        "scheduled_day": "Wednesday",
        "hook": "How we reduced data lookup time by 40% in a complex live sports analytics mobile app:",
        "content": """How we reduced data lookup time by 40% in a complex live sports analytics mobile app:

When dealing with real-time match data, users need key metrics instantly — without digging through nested tabs while a game is live.

The UX Challenge:
Users were getting overwhelmed by dense statistical tables on small mobile screens, leading to high drop-offs during live events.

Our UX Solutions:
1. Contextual Bottom Sheets: Replaced full-page navigation transitions with swipeable bottom sheets for instant player stats.
2. Sunlight-Optimized High Contrast: Engineered high-contrast color tokens specifically tested for outdoor sunlight viewing.
3. Heatmap-Driven Navigation: Reduced top-level navigation from 6 items down to 3 core hubs based on live telemetry heatmaps.

The Result:
• 40% faster time-to-stat lookup
• 28% increase in session duration during live matches

Check out the full interactive case study link on my portfolio! 🚀

#CaseStudy #UXCaseStudy #ProductDesign #MobileApp #UserResearch #DesignMetrics"""
    },
    {
        "id": "post_06_dark_mode_ux",
        "topic": "The Golden Rules of Dark Mode Design (Stop Using Pure Black #000000)",
        "post_type": "visual_micro_tip",
        "scheduled_day": "Friday",
        "hook": "Stop using pure black (#000000) for Dark Mode backgrounds. Here is why:",
        "content": """Stop using pure black (#000000) for Dark Mode backgrounds.

Pure black backgrounds create harsh visual contrast against white text, causing eye strain and halogen halation artifacts on OLED screens.

Here are 4 dark mode principles every product designer should follow:

1. Use Dark Slate / Charcoal for Base Backgrounds
Use `#0A0D12` or `#121212` as your base canvas. Dark gray allows you to express depth and elevation using lighter gray surface layers.

2. Communicate Elevation with Surface Lightness, NOT Shadows
Shadows are invisible on dark backgrounds. To show a card or modal elevation, make its background slightly lighter gray (e.g. Base: `#121212` -> Card: `#1E1E1E` -> Modal: `#2C2C2C`).

3. Desaturate Accent Colors
Vibrant primary colors (like `#0055FF`) look great on white light mode, but vibrate aggressively on dark backgrounds. Lower color saturation by 10-15% for dark mode tokens.

4. Reduce Text White Opacity
Instead of `#FFFFFF` for body text, use `#FFFFFF` with 87% opacity (or `#E1E1E1`). It maintains high contrast while eliminating glare.

Great dark mode feels premium, effortless, and easy on the eyes.

Does your product have a dedicated Dark Mode palette?

#UIUX #DarkMode #DesignTokens #VisualDesign #ColorTheory #Figma"""
    }
]

def initialize_viral_queue():
    queue_dir = os.path.join(os.path.dirname(__file__), "..", "linkedin_posts", "queue")
    os.makedirs(queue_dir, exist_ok=True)
    
    for post in HIGH_IMPACT_VIRAL_POSTS:
        file_path = os.path.join(queue_dir, f"{post['id']}.json")
        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(post, f, indent=2)
        print(f"Generated viral post asset: {post['id']}.json")

if __name__ == "__main__":
    initialize_viral_queue()
    print("All 6 High-Impact Viral LinkedIn Posts generated successfully in linkedin_posts/queue/!")
