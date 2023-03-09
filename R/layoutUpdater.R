# AUTO GENERATED FILE - DO NOT EDIT

#' @export
layoutUpdater <- function(id=NULL, annotations=NULL, gdID=NULL, initLayout=NULL, shapes=NULL, updateData=NULL) {
    
    props <- list(id=id, annotations=annotations, gdID=gdID, initLayout=initLayout, shapes=shapes, updateData=updateData)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LayoutUpdater',
        namespace = 'layout_updater',
        propNames = c('id', 'annotations', 'gdID', 'initLayout', 'shapes', 'updateData'),
        package = 'layoutUpdater'
        )

    structure(component, class = c('dash_component', 'list'))
}
