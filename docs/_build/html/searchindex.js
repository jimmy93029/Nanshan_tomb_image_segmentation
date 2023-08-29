Search.setIndex({"docnames": ["books/Nanshan-tomb_Project", "books/Predicting_mask_for_tifimage", "books/Training_object_detection_model_resultbook", "books/background", "books/detail", "books/how_to_use_this_module", "books/intro", "books/result"], "filenames": ["books/Nanshan-tomb_Project.md", "books/Predicting_mask_for_tifimage.ipynb", "books/Training_object_detection_model_resultbook.ipynb", "books/background.md", "books/detail.md", "books/how_to_use_this_module.md", "books/intro.md", "books/result.md"], "titles": ["&lt;no title&gt;", "Predicting_mask_for_tifimage", "Training object detection model resultbook", "\u80cc\u666f\u77e5\u8b58\u88dc\u5145", "\u7a0b\u5f0f\u78bc\u91cd\u8981\u8cc7\u8a0a\u8b1b\u89e3", "&lt;no title&gt;", "\u4e2d\u7814\u9662\u6691\u671f\u5c08\u6848: ShpPredictor \u4ecb\u7d39", "\u6210\u679c\u5c55\u793a\u8207\u5206\u6790"], "terms": {"\u6211\u5011\u5c07\u5229\u7528": 1, "training_object_detection_model_workbook": [1, 6], "\u6240\u5132\u5b58\u7684": 1, "model": [1, 4], "\u5c07": 1, "\u6a94\u8f49\u63db\u6210\u7279\u5b9a\u7269\u4ef6\u7684": 1, "\u906e\u7f69\u6a94": 1, "\u904e\u7a0b\u4e2d\u6211\u5011\u6703\u6709": 1, "\u500b\u6b65\u9a5f": 1, "\u5207\u5206": 1, "\u9810\u6e2c": 1, "\u5229\u7528": 1, "sam": [1, 6], "\u88fd\u4f5c": 1, "mask": [1, 4], "jpg": [1, 6], "\u5408\u4f75": 1, "\u6a94": [1, 2, 4, 6], "\u6a94\u63db\u6210": 1, "\u8acb\u5c07": 1, "sam_checkpoint_path": [1, 4], "average_model": 1, "pth": 1, "source_tiffil": [1, 4], "\u6587\u4ef6\u5099\u9f4a": 1, "\u4e26\u5c07": 1, "\u5404\u9805\u6b04\u4f4d\u586b\u59a5": 1, "\u4ee5\u4e0a\u5404\u9805\u8cc7\u6599\u5747\u6703\u5f71\u97ff": 1, "shp\u6a94\u751f\u6210\u7d50\u679c": 1, "\u8acb\u597d\u597d\u586b\u59a5": 1, "let": [1, 2], "s": [1, 2], "make": [1, 2], "sure": [1, 2], "we": [1, 2], "have": [1, 2], "access": [1, 2], "gpu": [1, 2, 6], "can": [1, 2], "us": [1, 2], "nvidia": [1, 2], "smi": [1, 2], "command": [1, 2], "do": [1, 2], "In": [1, 2], "case": [1, 2], "ani": [1, 2], "problem": [1, 2], "navig": [1, 2], "edit": [1, 2], "notebook": [1, 2], "hardwar": [1, 2], "acceler": [1, 2], "click": [1, 2], "save": [1, 2], "awar": 1, "super": [1, 2], "gradient": [1, 2], "sometim": 1, "chang": 1, "raleas": 1, "version": [1, 2, 4], "so": 1, "pleas": 1, "updat": 1, "latest": 1, "avoid": 1, "some": 1, "error": [1, 2], "about": 1, "pip": [1, 2], "segment": [1, 4], "geospati": 1, "0": [1, 2, 4, 7], "q": [1, 2], "supervis": [1, 2], "aspos": 1, "word": 1, "cd": [1, 2, 4], "home": [1, 2, 4], "import": [1, 2, 4], "sy": 1, "execut": 1, "m": 1, "git": 1, "http": 1, "github": [1, 6], "com": 1, "facebookresearch": 1, "anyth": [1, 4], "\u5982\u679c\u8981\u4e0b\u8f09": 1, "\u7684\u6a21\u578b\u6b0a\u91cd\u53ef\u4ee5\u89e3\u9396\u4ee5\u4e0b\u7684\u7a0b\u5f0f\u78bc": [], "mkdir": 1, "weight": 1, "wget": 1, "dl": 1, "fbaipublicfil": 1, "segment_anyth": 1, "sam_vit_h_4b8939": [1, 4], "\u8a73\u7d30\u53ef\u67e5\u770b": 1, "shppredictor": [1, 3], "jupyt": 1, "book": 1, "\u7684": 1, "\u7a0b\u5f0f\u78bc\u91cd\u8981\u8cc7\u8a0a\u8b1b\u89e3": 1, "\u88cf\u982d\u6703\u7d30\u8b1b\u53c3\u6578\u7684\u6ce8\u610f\u4e8b\u9805": 1, "torch": [1, 2, 4], "\u6a21\u578b\u6b0a\u91cd": 1, "object_detection_model_checkpoint_path": [1, 4], "content": [1, 2, 4], "drive": [1, 2, 4], "mydriv": [1, 2, 4], "project_nanshang": [1, 2, 4], "resourc": [1, 2, 4], "average_modelbest": 4, "dataset": [1, 3], "class": [1, 2], "\u6578\u76ee": 1, "\u548c": [1, 2], "\u7167\u7247\u4f86\u6e90\u6a94\u6848": 1, "num_class": [1, 2, 4], "nanshang_tomb_cp": 4, "\u7269\u4ef6\u5075\u6e2c\u7cbe\u6e96\u5ea6\u63a7\u5236": 1, "confidence_threshold": [1, 4], "65": [1, 4], "tile_s": [1, 4], "700": [1, 4], "\u7167\u7247\u7d93\u7def\u5ea6\u8cc7\u8a0a": 1, "top_left_lat": [1, 4], "22": [1, 4], "97494": 4, "\u6a94\u5de6\u4e0a\u89d2\u7684\u7def\u5ea6": [1, 4], "top_left_lon": [1, 4], "120": [1, 4], "19544": 4, "\u6a94\u5de6\u4e0a\u89d2\u7684\u7d93\u5ea6": [1, 4], "below_right_lat": [1, 4], "96717": 4, "\u6a94\u53f3\u4e0b\u89d2\u7684\u7def\u5ea6": [1, 4], "below_right_lon": [1, 4], "19775": 4, "\u6a94\u53f3\u4e0b\u89d2\u7684\u7d93\u5ea6": [1, 4], "devic": [1, 2, 4], "cuda": [1, 2, 4], "is_avail": [1, 2, 4], "els": [1, 2, 4], "cpu": [1, 2, 4], "model_arch": [1, 2, 4], "yolo_nas_l": [1, 2, 4], "sam_encoder_vers": [1, 4], "vit_h": [1, 4], "os": [1, 2], "storehous": 1, "splited_tifs_dir": 1, "path": 1, "join": 1, "splited_tif": 1, "mask_dir": 1, "complete_mask_filenam": 1, "map_mask": 1, "complete_mask_jpg": 1, "complete_mask_tiff": 1, "tiff": 1, "complete_mask_geotiff": 1, "geo": 1, "output_dir": [], "output": 1, "data": [1, 2], "getcwd": [1, 2], "makedir": [], "from": [1, 2, 4], "samgeo": 1, "common": 1, "split_rast": 1, "super_gradi": [1, 2], "train": 1, "def": 1, "load_object_detection_": 1, "str": 1, "int": [1, 2], "checkpoint_path": 1, "get": [1, 2], "return": 1, "tifffil": 1, "numpi": 1, "np": 1, "sv": [1, 2], "tifs_dir": 1, "listdir": 1, "box_predictor": 1, "detect": 1, "num_tomb": 1, "read": 1, "arrai": 1, "imread": 1, "img_arrai": 1, "result": 1, "list": [1, 2], "conf": [1, 2], "bboxes_xyxi": [1, 2], "len": [1, 2], "comput": 1, "number": 1, "tomb": 1, "xyxi": [1, 2], "confid": [1, 2, 4], "class_id": [1, 2], "label": [1, 2], "astyp": [1, 2], "final": 1, "total": 1, "print": [1, 2], "f": [1, 2, 4], "sam_model_registri": 1, "sampredictor": 1, "sam_predictor": 1, "ndarrai": 1, "set_imag": 1, "result_mask": 1, "score": [1, 4], "logit": 1, "multimask_output": 1, "true": [1, 2], "index": 1, "argmax": 1, "append": [1, 2], "load_segment_anything_model": 1, "checkpoint": 1, "pil": 1, "mask_annot": 1, "maskannot": 1, "copi": [1, 2], "produc": 1, "blank": 1, "zeros_lik": 1, "annot": [1, 2, 3], "scene": [1, 2], "img": 1, "fromarrai": 1, "rgb": 1, "osgeo": 1, "gdal": 1, "read_tif": 1, "tif_path": 1, "ds": [1, 2], "open": 1, "row": 1, "rasterxs": 1, "col": 1, "rasterys": 1, "width": 1, "height": 1, "size": [1, 2, 4], "new": 1, "collag": 1, "small": 1, "complet": [1, 2], "mask_filenam": 1, "im": 1, "name_list": 1, "split": 1, "_": [1, 2, 4], "ex": 1, "turn": 1, "mask_0_11": 1, "11": 1, "i": 1, "1th": 1, "valu": 1, "indic": 1, "order": 1, "x": 1, "rai": 1, "j": 1, "2th": 1, "y": 1, "see": [1, 2], "past": 1, "aw": 1, "rasterio": 1, "transform": 1, "from_origin": 1, "jpg2tiff": 1, "doc": 1, "document": 1, "builder": 1, "documentbuild": 1, "shape": 1, "insert_imag": 1, "image_data": 1, "tiff2goetiff": 1, "src": 1, "dtype": 1, "count": 1, "horizont": 1, "pixel": 1, "vertic": 1, "degre": 1, "dis_lat": 1, "dis_lon": 1, "pixel_size_x": 1, "exampl": 1, "pixel_size_i": 1, "defin": 1, "inform": 1, "cr": 1, "epsg": 1, "4326": 1, "wg": 1, "84": 1, "geotransform": 1, "write": 1, "file": 1, "w": 1, "driver": 1, "gtiff": 1, "dst": 1, "raster_to_shp": 1, "\u6b64": 2, "colab": [1, 2, 4], "\u7a0b\u5f0f\u78bc\u8ca0\u8cac\u8a13\u7df4\u6a21\u578b": 2, "\u8a13\u7df4\u597d\u7684\u6a21\u578b\u53ef\u4ee5\u5728": 2, "predicting_mask_for_tifimag": [2, 6], "ipynb": [2, 6], "\u4f86\u5efa\u69cb\u5730\u5716\u906e\u7f69\u7684": 2, "shp": [2, 4, 6], "\u53e6\u5916": 2, "\u672c\u7a0b\u5f0f\u78bc\u662f\u5f9e": 2, "\u800c\u4f86": 2, "\u66f4\u591a\u7d30\u7bc0\u53ef\u4ee5\u53c3\u8003": 2, "\u7684\u6559\u7a0b": 2, "note": 2, "To": 2, "easier": 2, "manag": 2, "imag": 2, "creat": 2, "constant": 2, "3": [2, 3], "1": 2, "restart": 2, "runtim": 2, "after": 2, "ll": 2, "need": 2, "confirm": 2, "ye": 2, "when": 2, "popup": 2, "carri": 2, "cell": 2, "below": 2, "pretrained_weight": 2, "coco": 2, "thi": 2, "project": [2, 4], "also": 2, "tool": 2, "store": 2, "our": 2, "ar": 2, "alreadi": 2, "\u8acb\u767b\u5165": [2, 4], "\u4e26\u5beb\u4e0a\u60a8\u7684\u8cc7\u6599\u96c6\u540d\u7a31": [2, 4], "\u7248\u672c": [2, 4], "rf": [2, 4], "project_nam": [2, 4], "10": [2, 3, 4], "workspac": [2, 4], "yolov5": [2, 4], "locat": 2, "sort": 2, "kei": 2, "ckpt_root_dir": 2, "directori": 2, "where": 2, "all": 2, "experi": 2, "experiment_nam": [2, 4], "log": 2, "tensorboard": 2, "name": [2, 4], "here": 2, "batch_siz": 2, "max_epoch": 2, "40": [2, 4], "score_thrshold": 2, "6": [2, 4, 7], "checkpoint_dir": [2, 4], "lower": [2, 4], "replac": [2, 4], "trainer": 2, "dataset_param": 2, "data_dir": 2, "train_images_dir": 2, "train_labels_dir": 2, "val_images_dir": 2, "valid": 2, "val_labels_dir": 2, "test_images_dir": 2, "test_labels_dir": 2, "dataload": 2, "coco_detection_yolo_format_train": 2, "coco_detection_yolo_format_v": 2, "train_data": 2, "images_dir": 2, "labels_dir": 2, "dataloader_param": 2, "num_work": 2, "2": 2, "val_data": 2, "test_data": 2, "loss": 2, "ppyoloeloss": 2, "detectionmetrics_050": 2, "detection_model": 2, "pp_yolo_": 2, "ppyoloepostpredictioncallback": 2, "train_param": 2, "silent_mod": 2, "fals": [2, 7], "average_best_model": 2, "warmup_mod": 2, "linear_epoch_step": 2, "warmup_initial_lr": 2, "1e": 2, "lr_warmup_epoch": 2, "initial_lr": 2, "5e": 2, "4": [2, 3], "lr_mode": 2, "cosin": 2, "cosine_final_lr_ratio": 2, "optim": 2, "adam": 2, "optimizer_param": 2, "weight_decai": 2, "0001": 2, "zero_weight_decay_on_bias_and_bn": 2, "ema": 2, "ema_param": 2, "decai": 2, "9": [2, 7], "decay_typ": 2, "threshold": 2, "mixed_precis": 2, "use_static_assign": 2, "reg_max": 2, "16": 2, "valid_metrics_list": 2, "score_thr": 2, "top_k_predict": 2, "300": 2, "num_cl": 2, "normalize_target": 2, "post_prediction_callback": 2, "score_threshold": [2, 7], "01": 2, "nms_top_k": 2, "1000": 2, "max_predict": 2, "nms_threshold": 2, "7": [2, 7], "metric_to_watch": 2, "map": 2, "50": 2, "training_param": 2, "train_load": 2, "valid_load": 2, "load_ext": 2, "logdir": 2, "notimplementederror": 2, "A": 2, "utf": [2, 4], "8": [2, 4], "local": [2, 4], "requir": 2, "got": 2, "ansi_x3": 2, "1968": 2, "run": 2, "code": 2, "getpreferredencod": [2, 4], "lambda": [2, 4], "r": 2, "yolo_na": 2, "\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u5c07\u8cc7\u6599\u8f49\u79fb\u81f3\u81ea\u5df1\u7684": 2, "googl": [2, 4], "\u96f2\u7aef": 2, "address": 2, "\u8981\u4fee\u6539\u5c31\u662f\u4e86": 2, "cp": [2, 4], "average_modelv10": [2, 4], "\u5176\u672c\u4e0a": 2, "\u6a21\u578b\u5c31\u5230\u9019\u88e1\u5c31\u5b8c\u6210\u4e86": 2, "\u63a5\u4e0b\u4f86\u53ef\u4ee5\u5230": 2, "\u4f86\u7522\u751f": 2, "\u60f3\u8981\u6aa2\u67e5": 2, "\u8fa8\u8b58\u80fd\u529b\u7684\u4eba\u8acb\u7e7c\u7e8c\u95b1\u8b80": 2, "\u4ee5\u4e0b\u6703\u5728": 2, "\u4e2d\u5448\u73fe\u9810\u6e2c\u7684\u906e\u7f69\u6a94": 2, "test_load": 2, "test_metrics_list": 2, "detectiondataset": 2, "from_yolo": 2, "images_directory_path": 2, "annotations_directory_path": 2, "data_yaml_path": 2, "yaml": 2, "force_mask": 2, "confidence_treshold": 2, "60": 2, "predict": 2, "image_nam": 2, "item": 2, "\u8acb\u8abf\u6574": 2, "seed": 2, "\u503c\u4ee5\u67e5\u770b\u4e0d\u540c\u5716\u7247\u7684\u9810\u6e2c\u7d50\u679c": 2, "random": 2, "14": 2, "\u53ef\u4ee5\u8abf\u6574": 2, "max_image_count": 2, "5": 2, "n": 2, "min": 2, "sampl": 2, "box_annot": 2, "boxannot": 2, "titl": 2, "frame_with_annot": 2, "skip_label": 2, "frame_with_predict": 2, "matplotlib": 2, "inlin": 2, "plot_images_grid": 2, "grid_siz": 2, "\u606d\u559c\u60a8\u5b8c\u6210\u8a13\u7df4": 2, "\u5982\u679c\u60a8\u5c0d\u6a21\u578b\u5448\u73fe\u7d50\u679c\u6eff\u610f": 2, "\u53ef\u4ee5\u5230\u4e0b\u4e00\u500b": 2, "workbook": 2, "\u4f86\u88fd\u4f5c": 2, "\u6b64\u6b21\u5c08\u6848\u7684\u5be6\u9a57\u7d20\u6750\u662f\u4f86\u81ea\u65bc": 3, "\u900f\u904e": 3, "deep": [3, 6], "learn": [3, 6], "\u6280\u8853": 3, "\u6211\u5011\u671f\u671b\u5c07\u822a\u62cd\u5716\u7684\u5893\u7269\u4ef6\u5206\u5e03\u627e\u51fa\u4f86": 3, "\u9032\u800c\u5c0d\u5176\u505a\u5176\u4ed6\u5206\u6790": 3, "\u7531\u65bc\u516c\u5893\u7684\u5206\u5e03\u53c8\u5bc6\u53c8\u64e0": 3, "\u5c0e\u81f4\u7269\u4ef6\u7684\u5075\u6e2c\u6709\u4e9b\u96e3\u5ea6": 3, "\u9019\u4e5f\u662f\u6b64\u5f71\u50cf\u6a94\u5e36\u7d66\u6211\u7684\u6311\u6230\u4e4b\u4e00": 3, "\u63a8\u51fa\u65bc": 3, "2023": 3, "\u5e74": 3, "\u6708": 3, "\u662f\u4e00\u500b\u5efa\u7acb\u5728": 3, "v8": 3, "\u4e4b\u4e0a\u7684\u7269\u4ef6\u5075\u6e2c\u6a21\u578b": 3, "\u5b83\u5229\u7528": 3, "\u7684\u65b9\u6cd5\u641c\u7d22\u51fa\u4e86": 3, "\u517c\u5177\u6e96\u78ba\u7387\u8207": 3, "\u901f\u5ea6\u7684\u6a21\u578b": 3, "\u800c\u4e14\u76f8\u6bd4\u65bc\u5176\u4ed6": 3, "\u6a21\u578b": 3, "\u5b83\u5728\u4e0d\u640d\u5931\u6389\u7cbe\u6e96\u5ea6\u7684\u72c0\u6cc1\u4e0b\u901f\u5ea6\u6709\u660e\u986f\u63d0\u5347": 3, "\u5982\u4e0b\u5716": 3, "\u65e8\u5728\u900f\u904e\u6a5f\u5668\u5b78\u7fd2\u7684\u65b9\u6cd5\u641c\u7d22\u51fa\u6700\u4f73\u5316\u7684\u6a21\u578b\u67b6\u69cb": 3, "\u4ee5\u5f80\u6a21\u578b\u7684\u67b6\u69cb\u90fd\u662f\u4eba\u624b\u52d5\u8abf\u6574\u51fa\u4f86\u7684": 3, "\u6240\u4ee5\u7522\u51fa\u7684\u6a21\u578b\u96d6\u7136\u6548\u679c": 3, "\u4e0d\u932f": 3, "\u4f46\u662f\u96e3\u4ee5\u9054\u5230\u6700\u7cbe\u6e96\u7684\u914d\u7f6e": 3, "\u7136\u800c\u900f\u904e": 3, "\u7684\u65b9\u6cd5": [3, 6], "\u6211\u5011\u53ef\u4ee5\u8b93\u6a5f\u5668\u81ea\u5df1\u8abf\u6574\u51fa\u6700\u7cbe\u6e96\u7684\u6a21\u578b": 3, "\u800c\u6b64\u985e\u5e38\u898b\u7684\u4f5c\u6cd5\u6709": 3, "\u66b4\u641c": 3, "reinforc": 3, "gradiant": 3, "descent": 3, "\u7b49\u65b9\u6cd5": 3, "\u63d0\u51fa\u65bc": 3, "\u662f\u4e00\u500b\u8a9e\u610f\u5206\u5272\u6a21\u578b": 3, "semant": 3, "\u4e0d\u53ea\u5982\u6b64": 3, "\u5b83\u9084\u662f\u4e00\u500b\u5927\u578b\u7684\u57fa\u5e95\u6a21\u578b": 3, "foundat": 3, "\u56e0\u70ba\u8a13\u7df4\u65bc\u64c1\u6709": 3, "\u5104\u8cc7\u6599\u7684": 3, "sa": 3, "1b": 3, "\u4f7f\u5f97\u5b83\u5f97\u7cbe\u6e96\u5ea6\u5f88\u9ad8": 3, "\u6b64\u5916": 3, "\u4e5f\u5177\u6709": 3, "zero": 3, "shot": 3, "\u7684\u6cdb\u5316\u80fd\u529b": 3, "\u5b83\u914d\u5099\u4e86\u53ef\u7528": 3, "prompt": 3, "\u7576\u4f5c": 3, "input": [3, 4], "\u7684\u529f\u80fd": 3, "\u6240\u4ee5\u5b83\u80fd\u5c0d\u4e0d\u540c\u4efb\u52d9\u505a\u8abf\u6574": 3, "\u9019\u6a23\u7684\u529f\u80fd\u8b93\u5b83\u4f5c\u70ba\u4e00\u500b\u5f88\u597d\u7684": 3, "\u662f\u4e00\u500b\u5c08\u4f9b\u7d66\u65bc\u5f71\u50cf\u8fa8\u8b58\u7684\u8cc7\u6599\u8655\u7406\u5e73\u53f0": 3, "\u5b83\u6709\u597d\u7528\u7684": 3, "prepoccess": 3, "augment": 3, "\u529f\u80fd": 3, "\u4ee5\u53ca\u5b83\u64c1\u6709\u76f8\u7576\u5feb\u7684\u8cc7\u6599\u50b3\u8f38\u901f\u5ea6": 3, "\u6240\u4ee5\u5c07\u5b83\u4f5c\u70ba\u8cc7\u6599\u5b58\u653e\u7684\u5e73\u53f0\u662f\u5341\u5206\u4fbf\u5229\u7684": 3, "\u800c\u4e14\u5b83\u4e5f\u9020\u798f\u7fa4\u773e": 3, "\u64b0\u5beb\u4e86\u8a31\u591a\u5f71\u50cf\u8fa8\u8b58\u6a21\u578b\u7684\u4f7f\u7528\u6559\u5b78": 3, "\u5c08\u6848\u4e5f\u53c3\u8003\u4e86\u8a31\u591a\u5b83\u7684\u7a0b\u5f0f\u78bc\u548c\u6587\u7ae0": 3, "\u4ee5\u4e0b\u5c07\u6703\u63d0\u9192\u4f7f\u7528\u6a21\u578b\u7684\u6ce8\u610f\u4e8b\u9805": 4, "\u8acb\u8a73\u95b1\u4ee5\u4e0b\u8aaa\u660e": 4, "\u4e2d\u6709\u4ee5\u4e0b\u7a0b\u5f0f\u78bc\u9700\u8981\u6ce8\u610f": [], "login": 4, "nanshang_tomb": 4, "download": 4, "\u8acb\u5728": 4, "\u4e2d\u586b\u5165\u60a8\u6240\u7528\u7684\u5c08\u6848\u540d\u7a31": 4, "\u4e14\u5728": 4, "\u4e2d\u586b\u5165\u60a8\u6240\u8981\u7528\u5f97": 4, "\u63a7\u5236\u8457\u6a21\u578b\u7684\u56b4\u683c\u7a0b\u5ea6": 4, "\u8a72\u503c\u8d8a\u9ad8": 4, "bound": [4, 7], "box": [4, 7], "\u7684\u6578\u91cf\u8d8a\u5c11": 4, "\u6a21\u578b\u7684": [4, 7], "recal": [4, 7], "\u503c\u8d8a\u4f4e": 4, "\u6700\u597d\u8abf\u51fa\u6700\u7406\u60f3\u7684": 4, "\u4ee5\u9054\u5230\u6700\u9ad8\u7684": 4, "f1": 4, "\u503c": 4, "\u6703\u5f71\u97ff\u6a21\u578b\u904b\u884c\u6642\u9593\u548c\u7cbe\u6e96\u5ea6": 4, "\u52d9\u5fc5\u586b\u59a5": 4, "\u6703\u5f71\u97ff": 4, "\u4e2d\u7684": 4, "ram": [1, 4], "\u7684\u4f7f\u7528\u5927\u5c0f": 4, "\u5982\u679c\u4e0d\u5e78": 4, "\u7684\u4f7f\u7528\u91cf\u8d85\u51fa": 4, "\u9650\u5236": 4, "\u53ef\u4ee5\u5617\u8a66\u964d\u4f4e": 4, "\u5927\u5c0f": 4, "\u9664\u4e86\u5c07\u8cc7\u6599\u8f09\u5230\u672c\u6a5f": 4, "\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0a\u7a0b\u5f0f\u78bc\u5c07\u8cc7\u6599\u8f49\u79fb\u5230": 4, "\u96f2\u7aef\u786c\u789f": 4, "\u8a18\u5f97\u5148\u9023\u63a5\u96f2\u7aef\u786c\u789f\u5728\u57f7\u884c\u6b64\u7a0b\u5f0f\u78bc": 4, "\u6709": 4, "\u500b\u5d7e\u6578\u8981\u586b\u59a5": 4, "\u5206\u5225\u5982\u4e0b": 4, "\u5728\u672c\u6b04\u4f4d\u4e2d": 4, "\u61c9\u586b\u5165\u5f9e": 4, "training_object_detection_model": [], "\u6240\u5f97\u5230\u7684": 4, "\u6a94\u6848": 4, "\u6216\u8a31\u60a8\u7576\u6642\u5df2\u5c07\u6a94\u6848\u5b58\u5230": 4, "\u90a3\u8acb\u60a8\u958b\u555f": 4, "\u4e26\u586b\u5165\u8a72\u6a94\u6848\u4e4b\u4f4d\u7f6e": 4, "\u61c9\u586b\u5165": 4, "\u7684\u6a21\u578b\u6b0a\u91cd": 4, "\u6216\u8a31\u60a8\u5df2\u5f9e\u4e0a\u65b9\u7684\u7a0b\u5f0f\u78bc\u4e0b\u8f09\u6a94\u6848": 4, "\u90a3\u8acb\u4f60\u5c07": 4, "\u5730\u5740\u8907\u88fd\u5230\u8a72\u4f4d\u7f6e": 4, "\u8cc7\u6599\u96c6\u4e2d\u985e\u5225\u7684\u6578\u76ee": 4, "\u6b32\u5206\u6790\u7684": 4, "tif": 4, "\u4ee3\u8868\u6a21\u578b\u7684\u56b4\u683c\u7a0b\u5ea6": 4, "\u5206\u6578\u503c\u8d8a\u9ad8\u4ee3\u8868\u6a21\u578b\u5224\u65b7\u7269\u4ef6\u7684\u56b4\u683c\u7a0b\u5ea6\u8d8a\u9ad8": 4, "tile": 4, "\u4ee3\u8868": 4, "\u6a94\u5206\u5272\u7684\u5716\u7247\u5927\u5c0f": 4, "\u8981\u77e5\u9053\u7684\u662f": 4, "\u5716\u7247\u5927\u5c0f\u9069\u4e2d\u624d\u80fd\u78ba\u4fdd\u6a21\u578b\u5224\u65b7\u6e96\u78ba": 4, "\u5982\u679c\u5716\u7247\u592a\u5927\u90a3\u7269\u4ef6\u672c\u8eab\u6703\u592a\u5c0f\u800c\u770b\u4e0d\u6e05\u695a": 4, "\u53cd\u4e4b\u5982\u679c\u5716\u7247\u592a\u5c0f\u90a3\u7269\u4ef6\u672c\u8eab\u6703\u88ab\u5207\u5272\u6210\u4e0d\u597d\u5224\u8b80\u7684\u5f62\u72c0": 4, "\u6240\u4ee5\u4f7f\u7528\u524d\u8acb\u5148\u6e2c\u8a66\u9069\u7576\u5927\u5c0f\u5728\u4e1f\u5165\u6a21\u578b": 4, "\u5728\u5c07": 4, "\u8f49\u56de": 4, "\u6a94\u6642": 4, "\u6211\u5011\u6703\u9700\u8981\u5c07": 4, "georefernc": 4, "\u6210": 4, "geotiff": 4, "\u9019\u6642\u5019\u6211\u5011\u5c31\u6703\u9700\u8981": 4, "\u6a94\u7684\u7d93\u7def\u5ea6": 4, "\u5de5\u4f5c\u65e5\u8a8c\u898b": 6, "\u6691\u671f\u5be6\u7fd2\u5de5\u4f5c\u7d00\u9304": 6, "\u4e0b": 6, "\u5c08\u6848\u898f\u5283\u898b": 6, "\u5357\u5c71\u516c\u5893\u5c08\u6848\u8a08\u756b": 6, "\u4f7f\u7528": 6, "\u5957\u4ef6\u9032\u884c\u5357\u5c71\u516c\u5893\u822a\u62cd\u5f71\u50cf\u6a94\u7684\u5893\u7269\u4ef6\u8fa8\u8b58": 6, "\u6b64\u5c08\u6848\u76ee\u7684\u662f\u5efa\u7acb\u4e00\u500b": 6, "\u81ea\u52d5\u7522\u751f\u5730\u5716\u906e\u7f69": 6, "\u9019\u9805\u65b9\u6cd5\u5c07\u7bc0\u7701\u5730\u7406\u5206\u6790\u4eba\u54e1\u7522\u751f\u7a7a\u62cd\u5716\u906e\u7f69\u6a94\u7684\u6642\u9593": 6, "\u591a\u51fa\u4f86\u7684\u6642\u9593\u5c07\u6709\u52a9\u65bc\u8a72\u4eba\u54e1\u9032\u884c\u6c7a\u7b56": 6, "\u9084\u8a18\u5f97\u5728\u4e2d\u7814\u9662\u7684\u4e00\u5802\u8ab2\u4e2d\u6211\u63a5\u89f8\u5230\u4e86": 6, "qgi": 6, "\u8edf\u9ad4": 6, "\u7576\u6642\u7b2c\u4e00\u6b21\u5b78\u5230": 6, "\u7684\u6211": 6, "\u6c92\u60f3\u5230\u7adf\u7136\u7d93\u7531\u6b65\u9a5f\u7c21\u55ae\u7684\u758a\u5716\u5206\u6790": 6, "\u5c31\u80fd\u5f9e": 6, "\u5730\u5716\u4e2d\u55c5\u5230\u8a31\u591a\u8cc7\u8a0a": 6, "\u81ea\u6b64\u6211\u958b\u59cb\u4f69\u670d\u8d77": 6, "\u8edf\u9ad4\u7684\u5f37\u5927": 6, "\u7136\u800c": 6, "\u6240\u4f7f\u7528\u7684": 6, "\u6a94\u7d93\u5e38\u662f\u624b\u5de5\u88fd\u6210": 6, "\u9019\u6a23\u7684\u904e\u7a0b\u4e0d\u50c5\u8017\u4eba\u529b\u4e5f\u6d6a\u8cbb\u6642\u9593": 6, "\u56e0\u6b64\u9032\u884c\u5c08\u6848\u69cb\u60f3\u6642\u6211\u5c31\u60f3\u6216\u8a31\u81ea\u5df1\u80fd\u70ba": 6, "\u63d0\u4f9b\u81ea\u5df1\u7684\u4e00\u4efd\u529b": 6, "\u8a66\u5716\u5f15\u5165": 6, "\u7684\u6280\u8853\u89e3\u6c7a\u9019\u554f\u984c": 6, "\u6211\u5c07\u4f7f\u7528": 6, "meta": 6, "\u63d0\u51fa\u7684\u7269\u4ef6\u5206\u5272\u6a21\u578b": 6, "\u53bb\u7522\u751f\u5730\u5716\u906e\u7f69": 6, "\u4e26\u7528\u7269\u4ef6\u5075\u6e2c\u6a21\u578b": 6, "yolo": 6, "na": 6, "\u53bb\u8fa8\u8b58\u51fa\u58b3\u5893\u4f4d\u7f6e": 6, "\u5728\u7522\u751f\u58b3\u5893\u4f4d\u7f6e\u7684": 6, "\u6a94\u5f8c": 6, "\u6a94\u6848\u5c07\u7d93\u7531\u4e00\u7cfb\u5217\u6a94\u6848\u8f49\u63db": 6, "georefer": 6, "\u4f86\u8b8a\u6210": 6, "\u9019\u4e00\u5957": 6, "workflow": 6, "\u53ef\u4ee5\u7531\u6b64\u5c08\u6848\u7684": 6, "\u4f86\u5bdf\u770b": 6, "\u7684\u6b65\u9a5f": 6, "\u5148\u9032\u5230": 6, "\u7522\u88fd\u7269\u4ef6\u5075\u6e2c\u6a21\u578b": 6, "\u4e26\u5c07\u6a21\u578b\u5132\u5b58\u4e0b\u4f86": 6, "\u518d\u5230": 6, "\u8f38\u5165\u6b32\u9810\u6e2c\u4e4b\u822a\u62cd\u5716": 6, "\u4ee5\u7522\u751f\u7269\u4ef6\u906e\u7f69": 6, "\u8acb\u78ba\u8a8d\u4f7f\u7528\u88dd\u7f6e\u6709\u8db3\u5920": 6, "\u4f9d\u64da\u6a94\u6848\u5927\u5c0f": 6, "\u4f7f\u7528\u6a21\u578b\u6240\u9700\u7684": 6, "\u5927\u5c0f\u4e5f\u4e0d\u4e00": 6, "\u7684\u6a21\u578b\u6b0a\u91cd\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7684\u7a0b\u5f0f\u78bc": 1, "average_modelv10_80epoch": 1, "nanshan2": 1, "9749": 1, "1977": 1, "9673": 1, "2033": 1, "\u57f7\u884c\u9019\u4e00\u6b65\u6642\u5f88\u5403": 1, "\u5982\u679c": 1, "\u5de5\u4f5c\u968e\u6bb5\u56e0\u7570\u5e38\u539f\u56e0\u800c\u4e2d\u6b62": 1, "\u90a3\u6eff\u6709\u53ef\u80fd\u662f": 1, "\u4e0d\u8db3\u7684\u554f\u984c": 1, "map_mask_tomb2": 1, "training_object_detection_model_resultbook": 4, "\u4e2d\u6709\u4ee5\u4e0b\u8cc7\u8a0a\u9700\u8981\u6ce8\u610f": 4, "origin": 7, "\u53ef\u4ee5\u767c\u73fe\u6b64\u6a21\u578b\u5e7e\u4e4e\u5c07\u5927\u90e8\u5206\u5893\u7269\u4ef6\u90fd\u627e\u51fa\u4f86\u4e86": 7, "\u6697\u793a\u8457": 7, "\u503c\u5f88\u5f88\u4e0d\u932f": 7, "\u800c\u4e14\u7121\u95dc\u7684\u5efa\u7bc9\u7269\u4e26\u672a\u88ab\u7d0d\u5165": 7, "\u4e2d": 7, "precis": 7, "\u5f88\u9ad8": 7, "\u4ee3\u8868\u6a21\u578b\u7522\u51fa\u7684\u7d50\u679c\u5176\u5be6\u5f88\u7406\u60f3": 7, "\u9019\u4e9b\u5716\u7247\u518d\u8f49\u6210": 7, "shapefil": 7, "\u5f8c\u5c07\u6709\u5f88\u4e0d\u932f\u7684\u5448\u73fe\u7d50\u679c": 7, "\u5728\u88fd\u4f5c": 7, "\u6642": 7, "\u6211\u8a55\u4f30\u5c0d\u6211\u5f71\u97ff\u6700\u5927\u7684\u662f": 7, "posit": 7, "\u4e5f\u5c31\u662f": 7, "\u932f\u5224\u6210\u5893\u7269\u4ef6\u7684\u5176\u4ed6\u7269\u54c1": 7, "\u6240\u4ee5\u70ba\u4e86\u907f\u514d\u9019\u4e9b\u6771\u897f\u7684\u5b58\u5728": 7, "\u6211\u5c07": 7, "\u8a2d\u70ba": 7, "\u76ee\u7684\u5c31\u662f\u70ba\u4e86\u8b93": 7, "\u5224\u5b9a\u7684\u66f4\u56b4\u683c": 7, "\u7576\u7136": 7, "\u5708\u7684\u8d8a\u56b4\u683c": 7, "\u503c\u5c31\u6709\u53ef\u80fd\u8d8a\u4f4e": 7, "\u6240\u4ee5\u5728": 7, "\u4e2d\u53ef\u4ee5\u770b\u5230": 7, "\u503c\u5927\u7d04": 7, "\u800c": 7, "\u5927\u7d04": 7, "\u9019\u662f\u610f\u6599\u4e4b\u5167\u7684\u7d50\u679c": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"predicting_mask_for_tifimage_workbook": [], "befor": [1, 2], "you": [1, 2], "start": [1, 2], "instal": [1, 2], "packag": 1, "input": 1, "set": [1, 2], "initi": 1, "directori": 1, "step": 1, "1": [1, 4], "crop": 1, "tif": 1, "step2": 1, "predict": 1, "bound": 1, "box": 1, "3": [1, 4], "predict_mask": 1, "4": [1, 4], "merg": 1, "imag": 1, "5": 1, "geotiff": 1, "2": [1, 4], "shp": 1, "train": 2, "object": 2, "detect": 2, "model": [2, 3, 7], "resultbook": 2, "yolo": [2, 3], "na": [2, 3], "login": 2, "specifi": 2, "your": 2, "dataset": [2, 4], "roboflow": [2, 3, 4], "fine": 2, "tune": 2, "custom": 2, "instanti": 2, "defin": 2, "metric": 2, "paramet": 2, "analyz": 2, "zip": 2, "download": 2, "\u8a18\u5f97\u5c07": 2, "checkpoint": [2, 4], "nanshang_tomb": 2, "\u8cc7\u6599\u593e\u4e2d\u7684": 2, "average_model": [2, 4], "pth": [2, 4], "\u6587\u4ef6\u4e0b\u8f09\u4e0b\u4f86": 2, "\u6b64\u6587\u4ef6\u5c07\u5728\u5f8c\u7e8c\u7684\u7269\u4ef6\u5075\u6e2c\u4e2d\u88ab\u4f7f\u7528\u5230": 2, "test": 2, "visual": 2, "them": 2, "evalu": 2, "infer": 2, "result": 2, "\u80cc\u666f\u77e5\u8b58\u88dc\u5145": 3, "\u5be6\u9a57\u7d20\u6750": 3, "\u5357\u5c71\u516c\u5893\u822a\u62cd\u5716": 3, "\u7269\u4ef6\u5075\u6e2c\u6a21\u578b": 3, "ps": 3, "neural": 3, "architectur": 3, "search": 3, "\u8a9e\u610f\u5206\u5272\u6a21\u578b": 3, "sam": 3, "segment": 3, "anyth": 3, "\u8cc7\u6599\u8655\u7406\u5e73\u53f0": 3, "\u7a0b\u5f0f\u78bc\u91cd\u8981\u8cc7\u8a0a\u8b1b\u89e3": 4, "\u4e00": 4, "training_object_detection_model_resultbook": [], "ipynb": [], "\u767b\u5165": 4, "\u4e26\u586b\u4e0a\u8cc7\u6599\u96c6": 4, "\u586b\u5165": 4, "score_thrshold": 4, "batch_siz": 4, "max_epoch": 4, "\u8a13\u7df4\u6a21\u578b\u5f8c\u52d9\u5fc5\u5c07": 4, "\u8cc7\u6599\u593e\u7684": 4, "\u4e0b\u8f09\u4e0b\u4f86": 4, "\u6b64\u6a94\u6848\u5c07\u5728\u4e0b\u4e00\u4efd": 4, "workbook": 4, "\u4e2d\u4f7f\u7528\u5230": 4, "\u4e8c": 4, "predicting_mask_for_tifimag": [1, 4], "\u6a21\u578b\u6b0a\u91cd": 4, "class": 4, "\u6578\u76ee": 4, "\u548c": 4, "\u7167\u7247\u4f86\u6e90\u6a94\u6848": 4, "\u7269\u4ef6\u5075\u6e2c\u7cbe\u6e96\u5ea6\u63a7\u5236": 4, "\u7167\u7247\u7d93\u7def\u5ea6\u8cc7\u8a0a": 4, "\u4e2d\u7814\u9662\u6691\u671f\u5c08\u6848": 6, "shppredictor": 6, "\u4ecb\u7d39": 6, "\u5c08\u6848\u76ee\u6a19": 6, "\u64b0\u5beb\u7de3\u7531": 6, "\u5982\u4f55\u53d6\u7528": 6, "\u6210\u679c\u5c55\u793a\u8207\u5206\u6790": 7, "training_object_detection_model": 4, "mask": 7, "\u9810\u6e2c\u7d50\u679c\u6bd4\u8f03": 7, "\u539f\u5716": 7, "perform": 7, "\u5206\u6790": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})