import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import confetti from 'canvas-confetti';

export default function DirectionList() {
    const methods = {
            toNAKAbyBencoolen: {
                title: "Bencoolen MRT",
                directions: [
                    {
                        method: "Exit via Exit C",
                        img: "/events/june/directions/Bencoolen_Exit C(Coming Out).webp"
                    },
                    {
                        method: "Turn left and walk along this walkway",
                        img: "/events/june/directions/Bencoolen_Exit C.webp"
                    },
                    {
                        method: "Continue along this walkway",
                        img: "/events/june/directions/Walkway From Bras Basah Exit C _ Bencoolen Exit C.webp"
                    },
                    {
                        method: "Turn right and go up the escalator",
                        img: "/events/june/directions/End of Walkway 1.webp"
                    },
                    {
                        method: "Walk along this walkway",
                        img: "/events/june/directions/Start of Walkway 2.webp"
                    },
                    {
                        method: "Continue along this walkway",
                        img: "/events/june/directions/Walkway 2 Continued.webp"
                    },
                    {
                        method: "Turn right at the dead end and exit",
                        img: "/events/june/directions/End of walkway 2_ Before Escalator to NAKA.webp"
                    },
                    {
                        method: "Go up the escalator and turn right",
                        img: "/events/june/directions/Escalator to NAKA.webp"
                    },
                    {
                        method: "Enter and go to Level 2",
                        img: "/events/june/directions/SOA_Security.webp"
                    }
                ]
            },
            toNAKAbyBB: {
                title: "Bras Basah MRT",
                directions: [
                    {
                        method: "Exit via Exit B and turn right",
                        img: "/events/june/directions/Bras Basah_Exit B.webp"
                    },
                    {
                        method: "Turn left and go up the escalator",
                        img: "/events/june/directions/End of Walkway 1.webp"
                    },
                    {
                        method: "Walk along this walkway",
                        img: "/events/june/directions/Start of Walkway 2.webp"
                    },
                    {
                        method: "Continue along this walkway",
                        img: "/events/june/directions/Walkway 2 Continued.webp"
                    },
                    {
                        method: "Turn right at the dead end and exit",
                        img: "/events/june/directions/End of walkway 2_ Before Escalator to NAKA.webp"
                    },
                    {
                        method: "Go up the escalator and turn right",
                        img: "/events/june/directions/Escalator to NAKA.webp"
                    },
                    {
                        method: "Enter and go to Level 2",
                        img: "/events/june/directions/SOA_Security.webp"
                    }
                ]
            },
            toNAKAbyBus: {
                title: "Bus",
                directions: [
                    {
                        method: "Take a bus to the SMU (4) bus stop (04121)",
                        img: "/events/june/directions/04121 Busstop.webp"
                    },
                    {
                        method: "Go straight and turn left",
                        img: "/events/june/directions/To NAKA from Bus Stop_ Lib pick up.webp"
                    },
                    {
                        method: "Enter and go to Level 2",
                        img: "/events/june/directions/SOA_Security.webp"
                    }
                ]
            },
            toNAKAbyCar: {
                title: "Drop-off by Car",
                directions: [
                    {
                        method: "Drop off here at Li Ka Shing Library",
                        img: "/events/june/directions/Library_Pick Up.webp"
                    },
                    {
                        method: "Walk straight along the walkway",
                        img: "/events/june/directions/Library pickup to NAKA_1.webp"
                    },
                    {
                        method: "Turn left and go to the crossing and cross the road",
                        img: "/events/june/directions/Library pickup to NAKA_2.webp"
                    },
                    {
                        method: "After crossing, enter from from the bus stop and turn left",
                        img: "/events/june/directions/To NAKA from Bus Stop_ Lib pick up.webp"
                    },
                    {
                        method: "Enter and go to Level 2",
                        img: "/events/june/directions/SOA_Security.webp"
                    }
                ]
            },
            toSCIS1byBB: {
                title: "Bras Basah MRT",
                directions: [
                    {
                        method: "Get out from Exit E and walk towards the road",
                        img: "/events/june/directions/Bras Basah Exit E to SCIS 1/Bras Basah_Exit E w arrow.webp"
                    },
                    {
                        method: "Cross the road at the traffic light",
                        img: "/events/june/directions/Bras Basah Exit E to SCIS 1/Bras Basah_Exit E Traffic Light w arrow.webp"
                    },
                    {
                        method: "Walk along the path",
                        img: "/events/june/directions/Bras Basah Exit E to SCIS 1/Bras Bash_Exit E After Traffic Light w arrow.webp"
                    },
                    {
                        method: "Turn left towards security at the end",
                        img: "/events/june/directions/Bras Basah Exit E to SCIS 1/SCIS 1 corner w arrow.webp"
                    },
                    {
                        method: "Enter and go to Level 3",
                        img: "/events/june/directions/SOA_Security.webp"
                    }
                ]
            },
            toSCIS1byBencoolen: {
                title: "Bencoolen MRT",
                directions: [
                    {
                        method: "Exit from Exit B of Bencoolen MRT and turn left",
                        img: "/events/june/directions/Bencoolen Exit B to SCIS 1/Bencoolen_Exit B.webp"
                    },
                    {
                        method: "Cross at the traffic lights to SCIS 1",
                        img: "/events/june/directions/Bencoolen Exit B to SCIS 1/Bencoolen_Exit B_Traffic Lights w arrow.webp"
                    },
                    {
                        method: "Walk towards the drop-off point",
                        img: "/events/june/directions/Bencoolen Exit B to SCIS 1/Bencoolen_Exit_B_Junction End w arrow.webp"
                    },
                    {
                        method: "Enter and go to Level 3",
                        img: "/events/june/directions/SOA_Security.webp"
                    }
                ]
            },
            toSCIS1byBus: {
                title: "Bus",
                directions: [
                    {
                        method: "Arrive at Bencoolen Stn Exit B Bus Stop (08069). Turn right from the bus stop to the traffic intersection. Cross at the traffic lights to SCIS 1 and walk towards the drop-off point.",
                        img: "/events/june/directions/Bencoolen Bus to SCIS 1.webp"
                    },
                    {
                        method: "Enter and go to Level 3",
                        img: "/events/june/directions/SOA_Security.webp"
                    }
                ]
            },
            toSCIS1byCar: {
                title: "Drop-off by Car",
                directions: [
                    {
                        method: "Drop off at School of Computing and Information Systems 1 pick up point. Enter and go to Level 3",
                        img: "/events/june/directions/SOA_Security.webp"
                    }
                ]
            },
            toBasementSRbyBus: {
                title: "Bus",
                directions: [
                    {
                        method: "Arrive at Bencoolen Stn Exit B Bus Stop (08069)",
                        img: "/events/june/directions/Bencoolen Bus Stop to Exit C/Bencoolen Stn Exit B Bus Stop (08069).webp"
                    },
                    {
                        method: "Turn left and head down towards Bencoolen MRT",
                        img: "/events/june/directions/Bencoolen Bus Stop to Exit C/Bencoolen MRT Underpass.webp"
                    },
                    {
                        method: "U-turn towards Exit C, Singapore Management University",
                        img: "/events/june/directions/Bencoolen Bus Stop to Exit C/Bencoolen MRT Underpass Underground.webp"
                    },
                    {
                        method: "You will see an usher who will direct you",
                        img: "/events/june/directions/Bencoolen_Exit C(Coming Out).webp"
                    }
                ]
            },
            toBasementSRbyCar: {
                title: "Drop-off by Car",
                directions: [
                    {
                        method: "Drop off at School of Computing and Information Systems 2 pick up point. Head towards the basement via the escalator",
                        img: "/events/june/directions/Basement SR Car Dropoff/SCIS2 Drop-off.webp"
                    },
                    {
                        method: "Go through the door on the right",
                        img: "/events/june/directions/Basement SR Car Dropoff/Doors of choice.webp"
                    },
                    {
                        method: "Once you are out of the door, turn left towards the seminar rooms",
                        img: "/events/june/directions/Basement SR Car Dropoff/Walkway to SR.webp"
                    },
                ]
            },
            BBUsher: {
                title: "Bras Basah MRT",
                directions: [
                    {
                        method: "Exit via Exit C, turn right and walk straight. You will see an usher at Bencoolen MRT who will direct you",
                        img: "/events/june/directions/Brash Basah_Exit C.webp"
                    },
                ]
            },
            BencoolenUsher: {
                title: "Bencoolen MRT",
                directions: [
                    {
                        method: "Exit via Exit C and turn right. You will see an usher who will direct you",
                        img: "/events/june/directions/Bencoolen_Exit C(Coming Out).webp"
                    }
                ]
            }
        }
    const directions = [
        {
            title: "Day 1",
            tracks: [
                {
                    "All Tracks": [
                        methods.toNAKAbyBencoolen,
                        methods.toNAKAbyBB,
                        methods.toNAKAbyBus,
                        methods.toNAKAbyCar
                    ]
                }
            ]
        },
        {
            title: "Day 2",
            tracks: [
                {
                    "Beginner": [
                        methods.BencoolenUsher,
                        methods.BBUsher,
                        methods.toBasementSRbyBus,
                        methods.toBasementSRbyCar
                    ]
                },
                {
                    "Intermediate": [
                        methods.toSCIS1byBencoolen,
                        methods.toSCIS1byBB,
                        methods.toSCIS1byBus,
                        methods.toSCIS1byCar
                    ]
                },
                {
                    "Advanced": [
                        methods.toSCIS1byBencoolen,
                        methods.toSCIS1byBB,
                        methods.toSCIS1byBus,
                        methods.toSCIS1byCar
                    ]
                }
            ]
        }
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
                                                    {f.directions.map((g, index) => (
                                                        <div key={g.method}>
                                                            <img src={g.img} alt={g.method} className="rounded-xl ring ring-1 ring-slate-800 mt-6" />
                                                            <p className="text-center mt-3 mx-10"><span className="font-semibold">{index + 1}.</span> {g.method}</p>
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