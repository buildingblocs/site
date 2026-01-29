import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import confetti from 'canvas-confetti';

export default function DirectionList() {
    const methods = { // added bold_method and hyperlink functionality, filler.webp
            toSUTDbyUChangi: {
                title: "Upper Changi MRT",
                directions: [
                    {
                        method: "Exit via Exit E, and you will see an usher",
                        img: "/events/june/directions/mrtSUTDexite.webp" // replace with exit e img
                    },
                    {
                        method: "The usher will then direct you forwards and right",
                        img: "/events/june/directions/mrtSUTDbusstop.webp"
                    },
                ]
            },
            toSUTDbyBus: {
                title: "Bus 2/2B/5/24",
                directions: [
                    {
                        method: "Take a bus to Upp Changi Stn (96049), there will be an usher at the bus stop to direct you to the corridor below",
                        img: "/events/june/directions/SUTDbusstop.webp"
                    },
                    {
                        method: "Then another usher will guide you down the corridor where you will make a right at the end!",
                        img: "/events/june/directions/mrtSUTDbusstop.webp"
                    },
                ]
            },
            toSUTDby20: {
                title: "Bus 20/20A",
                directions: [
                    {
                        method:"",
                        bold_method: "Scroll down for the bus stop opposite SUTD",
                        img: "/events/june/directions/filler.webp"
                    },
                    {
                        method: "Take a bus to SUTD (96449), walk along this path until you see an usher at the horizontal SUTD sign",
                        img: "/events/june/directions/20SUTDbusstop1.webp"
                    },
                    {
                        method: "Turn right after this SUTD sign",
                        img: "/events/june/directions/20SUTDbusstop2.webp"
                    },
                    {
                        method: "Walk straight in and turn left before the glass windows. There will be an usher at the SUTD sign as seen below",
                        img: "/events/june/directions/20SUTDbusstop3.webp"
                    },
                    {
                        method: "Walk on the path left of this sign until the DBS ATM, and you will see an usher to guide you left",
                        img: "/events/june/directions/Librarydropoff2.webp"
                    },
                    {
                        method: "",
                        bold_method: "For the bus stop opposite SUTD",
                        img: "/events/june/directions/filler.webp"
                    },
                    {
                        method: "Alight at Opp SUTD (96441), you will see an usher to guide you",
                        img: "/events/june/directions/oppSUTDbusstop1.webp"
                    },
                    {
                        method: "Cross the road at the traffic light in the first picture, and walk through this path",
                        img: "/events/june/directions/oppSUTDbusstop2.webp"
                    },
                    {
                        method: "9. Turn right and enter the building. Walk straight until you see Albert Hong LT1 on your left",
                        img: "/events/june/directions/oppSUTDbusstop3.webp"
                    },
                ]
            },
            toSUTDbyCar: {
                title: "Drop-off by Car",
                directions: [
                    {
                        method: "Drop off here outside SUTD Library and you will see an usher",
                        hyperlink:"https://maps.app.goo.gl/ehavaopu27PSkWX49", // use for car spots or weird spots labelled on gmaps
                        img: "/events/june/directions/Librarydropoff1.webp"
                    },
                    {
                        method: "Walk on the path left of this sign until the DBS ATM, and you will see an usher to guide you left",
                        img: "/events/june/directions/Librarydropoff2.webp"
                    },
                ]
            },
        }
    const directions = [
        {
            title: "Day 1 & 3",
            tracks: [
                {
                    "All Tracks": [
                        methods.toSUTDbyUChangi,
                        methods.toSUTDbyBus,
                        methods.toSUTDby20,
                        methods.toSUTDbyCar
                    ]
                }
            ]
        },
        // {
        //     title: "Day 2 & 3",
        //     tracks: [
        //         {
        //             "Under Construction": [
                    
        //             ]
        //         },
        //         // {
        //         //     "Beginner": [
        //         //         methods.toSUTDbyUChangi,
        //         //         methods.toSUTDbyBus,
        //         //         methods.toSUTDby20,
        //         //         methods.toSUTDbyCar
        //         //     ]
        //         // },
        //         // {
        //         //     "Intermediate": [
        //         //         methods.toSUTDbyUChangi,
        //         //         methods.toSUTDbyBus,
        //         //         methods.toSUTDby20,
        //         //         methods.toSUTDbyCar
        //         //     ]
        //         // },
        //         // {
        //         //     "Advanced": [
        //         //         methods.toSUTDbyUChangi,
        //         //         methods.toSUTDbyBus,
        //         //         methods.toSUTDby20,
        //         //         methods.toSUTDbyCar
        //         //     ]
        //         // }
        //     ]
        // },
        // {
        //     title: "Day 3",
        //     tracks: [
        //         {
        //             "Beginner": [
        //                 methods.toSUTDbyUChangi,
        //                 methods.toSUTDbyBus,
        //                 methods.toSUTDby20,
        //                 methods.toSUTDbyCar
        //             ]
        //         },
        //         {
        //             "Intermediate": [
        //                 methods.toSUTDbyUChangi,
        //                 methods.toSUTDbyBus,
        //                 methods.toSUTDby20,
        //                 methods.toSUTDbyCar
        //             ]
        //         },
        //         {
        //             "Advanced": [
        //                 methods.toSUTDbyUChangi,
        //                 methods.toSUTDbyBus,
        //                 methods.toSUTDby20,
        //                 methods.toSUTDbyCar
        //             ]
        //         }
        //     ]
        // }
    ]; 
    return (
        <Tabs className="my-5">
            <TabsList className="w-full">
                {/* 'b' should be a day */}
                {directions.map(b => (
                    <TabsTrigger key={b.title} className="w-full" value={b.title}>
                        {b.title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {/* 'c' should be a day */}
            {directions.map(c => (
                <TabsContent key={c.title} value={c.title}>
                    <Tabs>
                        <TabsList className="w-full">
                            {/* 'd' n 'e' should be a track */}
                            {c.tracks.map(d => (
                            <TabsTrigger className="w-full" key={Object.keys(d)[0]} value={Object.keys(d)[0]}>
                                {Object.keys(d)[0]}
                            </TabsTrigger>
                            ))}
                        </TabsList>
                        {c.tracks.map(e => (
                            <TabsContent key={Object.keys(e)[0]} value={Object.keys(e)[0]}>
                                        <Tabs>
                                            <TabsList className="w-full flex-wrap gap-y-1">
                                                {Object.values(e)[0].map((f: { title: string; }) => (
                                                    <TabsTrigger value={f.title} key={f.title} className="flex-1">
                                                        {f.title}
                                                    </TabsTrigger>
                                                ))}
                                            </TabsList>
                                            {Object.values(e)[0].map((f: { title: string; directions: any[]; }) => (
                                                <TabsContent value={f.title} key={f.title}>
                                                    {!(f.title == "Bus 20/20A") && f.directions.map((g, index) => (
                                                        <div key={g.method}>
                                                            <>
                                                            {!g.method && (
                                                                <div>
                                                                    <img src={g.img} alt={g.method} className="rounded-xl ring-slate-800 mt-6" />
                                                                    <p className="text-center mt-3 mx-10 font-bold underline"><span className="font-semibold">{index + 1}.</span> {g.bold_method}</p>
                                                                    {g.hyperlink && (
                                                                        <div className="flex justify-center">
                                                                            <a className="text-center mt-3 mx-10 underline text-blue-500" href={g.hyperlink}>Location on Google Maps</a>
                                                                        </div>)
                                                                    }
                                                                </div>
                                                            )}
                                                            </>
                                                            <>
                                                            {g.method && (
                                                                <div>
                                                                    <img src={g.img} alt={g.method} className="rounded-xl ring ring-1 ring-slate-800 mt-6" />
                                                                    <p className="text-center mt-3 mx-10"><span className="font-semibold">{index + 1}.</span> {g.method}</p>
                                                                    {g.hyperlink && (
                                                                        <div className="flex justify-center">
                                                                            <a className="text-center mt-3 mx-10 underline text-blue-500" href={g.hyperlink}>Location on Google Maps</a>
                                                                        </div>)
                                                                    }
                                                                </div>
                                                            )}
                                                            </>
                                                        </div>
                                                    ))}
                                                    {(f.title == "Bus 20/20A") && f.directions.map((g, index) => ( // goofy solution to remove enumeration just for this tab, remove for future conferences
                                                        <div key={g.method}>
                                                            <>
                                                            {!g.method && (
                                                                <div>
                                                                    <img src={g.img} alt={g.method} className="rounded-xl ring-slate-800 mt-6" />
                                                                    <p className="text-center mt-3 mx-10 font-bold underline">{g.bold_method}</p>
                                                                    {g.hyperlink && (
                                                                        <div className="flex justify-center">
                                                                            <a className="text-center mt-3 mx-10 underline text-blue-500" href={g.hyperlink}>Location on Google Maps</a>
                                                                        </div>)
                                                                    }
                                                                </div>
                                                            )}
                                                            </>
                                                            <>
                                                            {g.method && (
                                                                <div>
                                                                    <img src={g.img} alt={g.method} className="rounded-xl ring ring-1 ring-slate-800 mt-6" />
                                                                    <p className="text-center mt-3 mx-10">{g.method}</p>
                                                                    {g.hyperlink && (
                                                                        <div className="flex justify-center">
                                                                            <a className="text-center mt-3 mx-10 underline text-blue-500" href={g.hyperlink}>Location on Google Maps</a>
                                                                        </div>)
                                                                    }
                                                                </div>
                                                            )}
                                                            </>
                                                        </div>
                                                    ))}
                                                    <div className="bg-slate-900 mt-7 mb-10 p-5 rounded-xl flex flex-col items-center">
                                                        <h2 className="text-lg mb-4">You've reached!</h2>
                                                        <Button
                                                            onClick={() =>
                                                            confetti({
                                                                angle: randomInRange(55, 125),
                                                                spread: randomInRange(50, 70),
                                                                particleCount: randomInRange(50, 100),
                                                                origin: { y: 0.6 },
                                                            })
                                                            }
                                                            className="inline-flex items-center justify-center"
                                                        >
                                                            click me :)
                                                        </Button>
                                                    </div>
                                                </TabsContent>
                                            ))}
                                        </Tabs>
                            </TabsContent>
                        ))}
                    </Tabs>
                </TabsContent>
            ))}
        </Tabs>
    );    
};

function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
}