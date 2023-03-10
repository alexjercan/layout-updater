
module LayoutUpdater
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.0.13"

include("jl/layoutupdater.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "layout_updater",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "layout_updater.min.js",
    external_url = "https://unpkg.com/layout_updater@0.0.13/layout_updater/layout_updater.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "layout_updater.min.js.map",
    external_url = "https://unpkg.com/layout_updater@0.0.13/layout_updater/layout_updater.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
