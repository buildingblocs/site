import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";
import { imageUrlFor } from "@/lib/image.ts"; // adjust to wherever your Sanity image URL builder lives

export interface SanityImage {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface Step {
    _key: string;
    step: string;
    image: SanityImage;
    hyperlink?: string;
}

export interface Method {
    _key: string;
    methodName: string;
    steps: Step[];
}

export interface Track {
    _key: string;
    track: string;
    methods?: Method[];
    steps?: Step[];
}

export interface Day {
    _key: string;
    day: string;
    tracks: Track[];
}

function StepsList({ steps }: { steps: Step[] }) {
    return (
        <>
            {steps.map((step, sIdx) => (
                <div key={step._key} className="mt-6 text-center">
                    <img
                        src={imageUrlFor(step.image, false)}
                        alt={step.step}
                        className="rounded-xl ring ring-white/50 mx-auto max-w-full"
                    />
                    <p className="mt-3 mx-10">
                        <span className="font-semibold">{sIdx + 1}.</span> {step.step}
                    </p>
                    {step.hyperlink && (
                        <a
                            href={step.hyperlink}
                            target="_blank"
                            className="text-blue-400 underline block mt-2 text-sm"
                        >
                            View on Google Maps
                        </a>
                    )}
                </div>
            ))}
            <div className="button bg-slate-900 mt-10 p-8 rounded-4xl flex flex-col items-center">
                <h2 className="text-lg mb-4">You've reached!</h2>
                <Button onClick={() => confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })}>
                    click me :)
                </Button>
            </div>
        </>
    );
}

export default function UniversalDirections({ data }: { data: Day[] }) {
    return (
        <Tabs className="my-5 flex-col">
            <TabsList className="w-full gap-x-1 rounded-[calc(1rem)] bg-slate-900 border border-white/15">
                {data.map((day) => (
                    <TabsTrigger key={day._key}
                                 className="w-full button bg-slate-700 hover:bg-slate-800 data-[state=active]:bg-slate-800/75"
                                 value={day._key}>
                        {day.day}
                    </TabsTrigger>
                ))}
            </TabsList>

            {data.map((day) => (
                <TabsContent key={day._key} value={day._key}>
                    <Tabs
                        className="flex-col gap-x-1">
                        <TabsList
                            className="w-full gap-x-1 rounded-[calc(1rem)] bg-slate-900 border border-white/15">
                            {day.tracks.map((track) => (
                                <TabsTrigger key={track._key} value={track._key}
                                             className="w-full button bg-slate-700 hover:bg-slate-800 data-[state=active]:bg-slate-800/75">
                                    {track.track}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {day.tracks.map((track) => (
                            <TabsContent key={track._key} value={track._key}>
                                {track.methods && track.methods.length > 0 ? (
                                    <Tabs className="flex-col">
                                        <TabsList
                                            className="flex-wrap w-full gap-1 rounded-[calc(1rem)] bg-slate-900 border border-white/15">
                                            {track.methods.map((method) => (
                                                <TabsTrigger
                                                    key={method._key}
                                                    value={method._key}
                                                    className="flex-1 button bg-slate-700 hover:bg-slate-800 data-[state=active]:bg-slate-800/75"
                                                >
                                                    {method.methodName}
                                                </TabsTrigger>
                                            ))}
                                        </TabsList>

                                        {track.methods.map((method) => (
                                            <TabsContent key={method._key} value={method._key}>
                                                <StepsList steps={method.steps} />
                                            </TabsContent>
                                        ))}
                                    </Tabs>
                                ) : (
                                    <StepsList steps={track.steps ?? []} />
                                )}
                            </TabsContent>
                        ))}
                    </Tabs>
                </TabsContent>
            ))}
        </Tabs>
    );
}