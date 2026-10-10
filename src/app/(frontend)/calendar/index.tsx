import type { Metadata } from "next/types";

import { getPayload } from "payload";
import configPromise from "@payload-config";
import React from "react";

export const dynamic = "force-static";
export const revalidate = 600;

export default async function Page() {
    const payload = await getPayload({ config: configPromise });

    const events = await payload.find({
        collection: "guidedWorkshops",
        depth: 1,
        limit: 12,
        overrideAccess: false,
        select: {
            title: true,
        },
    })
}
