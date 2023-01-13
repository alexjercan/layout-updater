# AUTO GENERATED FILE - DO NOT EDIT

#' @export
layoutUpdater <- function(id=NULL, gdID=NULL, sequentialUpdate=NULL, updateData=NULL) {
    
    props <- list(id=id, gdID=gdID, sequentialUpdate=sequentialUpdate, updateData=updateData)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LayoutUpdater',
        namespace = 'layout_updater',
        propNames = c('id', 'gdID', 'sequentialUpdate', 'updateData'),
        package = 'layoutUpdater'
        )

    structure(component, class = c('dash_component', 'list'))
}
