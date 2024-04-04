import React from "react";
import { Head, Link } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props);
    return (
        <div className="bg-gray-500">
            <Head title={props.title} />
            Homepage
        </div>
    );
}
