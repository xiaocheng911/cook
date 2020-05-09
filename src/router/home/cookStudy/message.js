import Message from './../../../components/common/Message';
import Message2 from './../../../components/common/Message2';

export default [
    {
        path: "/message/m0",
        name: "messagem0",
        component: Message2
    },
    {
        path: "/message/m1",
        name: "messagem1",
        component: Message2
    },
    {
        path: "/message/m2",
        name: "messagem1",
        component: Message2
    },
    {
        path: "/message/m3",
        name: "messagem3",
        component: Message2
    },
    {
        path: "/message/m4",
        name: "messagem4",
        component: Message2
    },
    {
        path: "/message",
        exact: true,
        name: "messageclass",
        component: Message
    }
]