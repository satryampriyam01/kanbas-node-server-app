import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {
  app.delete("/api/modules/:moduleId", async (req, res) => {
    const { moduleId } = req.params;
    const status = await modulesDao.deleteModule(moduleId);
    res.send(status);
  });
  app.put("/api/modules/:moduleId", async(req, res) => {
    const { moduleId } = req.params;
    const moduleUpdates = req.body;
    const status = await modulesDao.updateModule(moduleId, moduleUpdates);
    //console.log(status);
    res.send(status);
  });
}
