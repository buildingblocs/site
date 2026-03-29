import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

export default function UniversalDirections({ data }: { data: any[] }) {
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    return (
        <Tabs className="my-5">
            <TabsList className="w-full">
                {data.map((day) => (
                    <TabsTrigger key={day.title} className="w-full" value={day.title}>
                        {day.title}
                    </TabsTrigger>
                ))}
            </TabsList>

            {data.map((day) => (
                <TabsContent key={day.title} value={day.title}>
                    <Tabs>
                        
                        <TabsList className="w-full mt-2">
                            {day.tracks.map((trackObj: any) => {
                                const trackName = Object.keys(trackObj)[0];
                                return (
                                    <TabsTrigger key={trackName} value={trackName} className="w-full">
                                        {trackName}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>


                        {day.tracks.map((trackObj: any) => {
                            const trackName = Object.keys(trackObj)[0];
                            const methods = trackObj[trackName];
                            return (
                                <TabsContent key={trackName} value={trackName}>

                                    <Tabs>
                                        <TabsList className="w-full flex-wrap gap-y-1 mt-2">
                                            {methods.map((m: any) => (
                                                <TabsTrigger key={m.title} value={m.title} className="flex-1">
                                                    {m.title}
                                                </TabsTrigger>
                                            ))}
                                        </TabsList>
                                        
                                        {methods.map((m: any) => (
                                            <TabsContent key={m.title} value={m.title}>
                                                {m.directions.map((step: any, sIdx: number) => (
                                                    <div key={sIdx} className="mt-6 text-center">
                                                        <img src={step.img} alt="Step" className="rounded-xl ring ring-1 ring-slate-800 mx-auto max-w-full" />
                                                        <p className={`mt-3 mx-10 ${step.bold_method ? 'font-bold underline' : ''}`}>
                                                            <span className="font-semibold">{sIdx + 1}.</span> {step.method || step.bold_method}
                                                        </p>
                                                        {step.hyperlink && (
                                                            <a href={step.hyperlink} target="_blank" className="text-blue-400 underline block mt-2 text-sm">
                                                                View on Google Maps
                                                            </a>
                                                        )}
                                                    </div>
                                                ))}
                                                <div className="bg-slate-900 mt-10 p-8 rounded-xl flex flex-col items-center">
                                                    <h2 className="text-lg mb-4">You've reached!</h2>
                                                    <Button onClick={() => confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })}>
                                                        click me :)
                                                    </Button>
                                                </div>
                                            </TabsContent>
                                        ))}
                                    </Tabs>
                                </TabsContent>
                            );
                        })}
                    </Tabs>
                </TabsContent>
            ))}
        </Tabs>
    );
}
