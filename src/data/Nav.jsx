import { SquareChartGantt } from 'lucide-react';
import { Warehouse } from 'lucide-react';
import { Contact } from 'lucide-react';

export const navLinks=[
    {
        "link":"/",
        "text":"Overview",
        "icon":<SquareChartGantt size={20} color="#48ea69"/>
    },
    {
        "link":"/repository",
        "text":"Repository",
        "icon":<Warehouse size={20} color="#48ea69"/>

    },
    {
        "link":"/contact",
        "text":"Contact",
        "icon":<Contact size={20} color="#48ea69"/>


    }
]